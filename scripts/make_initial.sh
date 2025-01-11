

# Check if an argument was supplied
if [ $# -eq 0 ]; then
  echo "No SQL file supplied. Usage: ./load_backup.sh <path_to_sql_file>"
  exit 1
fi

# Check if the file exists on the host system
if [ ! -f "$1" ]; then
  echo "The file '$1' does not exist."
  exit 1
fi

echo "Making $1 an initializing backup"
cp $1 docker/mariadb/final_backup.sh


# Check if the file was copied successfully
if [ $? -ne 0 ]; then
  echo "Failed to copy the file to the container."
  exit 1
fi


echo "$1 Successfully made to be initializing!"
