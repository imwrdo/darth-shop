# Darth Shop Clone

A clone of the [Darth shop](https://darth-shop.ru) built using PrestaShop v1.7.8.11.

---
## Technologies used
- [Prestashop 1.7.8.11](https://github.com/PrestaShop/PrestaShop/tree/1.7.8.11)
- `php:7.4`
- `mariadb:11.5`
- `Python 3`
- `Selenium`
- `Docker`

## How to run

### 1. Clone the Repository
```bash
git clone https://github.com/imwrdo/darth-shop.git
cd darth-shop
```

### Up docker containers

Run this command to start docker containers
```
docker-compose up -d
```
To stop containers use ```docker-compose down```

### Load db backup
All scripts for creating and loading db backups are in ```scripts``` directory.

Add executable rights for them
```
chmod +x scripts/
```

**Load backup**
```
./scripts/load_backup.sh ./backups/final_backup.sql
```
Backups are stored in ```backups``` dir.

**Create backup**
```
./scripts/create_backup.sh ./backups/final_backup.sql
```

## 👥 Authors
- [Mykola Pozniak](https://github.com/imwrdo)
- [Pavel Khmialeuski](https://github.com/pablokhmel)
- [Alla Krylova](https://github.com/chuuchuun)
- [Kiryl Pashkevich](https://github.com/KiriXiwi)