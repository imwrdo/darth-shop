#!/bin/bash

DB_HOST="admin-mysql_db.1.ei63yz8cr0d9i16fo4v1203gy" # Host bazy danych (nazwa kontenera)
DB_USER="root"                  # Nazwa użytkownika bazy danych
DB_PASS="student"               # Hasło do bazy danych
DB_NAME="BE_196687"             # Nazwa bazy danych do utworzenia
DUMP_FILE="./deploy.sql" # Ścieżka do pliku dump na hoście
# Sprawdzanie, czy plik dump istnieje
if [ ! -f "$DUMP_FILE" ]; then
    echo "Plik dump $DUMP_FILE nie istnieje."
    exit 1
fi
# Sprawdzanie, czy baza danych istnieje
result=$(docker exec -i "$DB_HOST" mysql -u "$DB_USER" -p"$DB_PASS" -e "SHOW DATABASES LIKE '$DB_NAME';")
if [ $? -ne 0 ]; then
    echo "Error"
fi

if [ -n "$result" ]; then 
    echo "Podana baza danych istnieje"
fi

# Importowanie danych z pliku dump
docker exec -i "$DB_HOST" mysql -u "$DB_USER" -p"$DB_PASS" "$DB_NAME" < "$DUMP_FILE"
# Sprawdzanie statusu operacji
if [ $? -eq 0 ]; then
    echo "Baza danych została pomyślnie zaimportowana z pliku: $DUMP_FILE"
else
    echo "Wystąpił błąd przy imporcie bazy danych."
    exit 1
fi
