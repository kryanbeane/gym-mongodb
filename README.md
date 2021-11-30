# Commercial Gym Mongo Database
NoSQL assignment to implement CRUD, aggregation and cloud deployment of a MongoDB. 

## Description

My database is based on a commercial gym. It covers various aspects of what a typical gym might store in their database. There are staff, members, personal trainers, fitness plans, fitness classes and orders from an ecommerce gym equipment shop. I am using Atlas for cloud deployment.

## Getting Started

### Dependencies

* Ubuntu 20.04 was used for installation and implementation. Below is a brief overview of how to set up MongoDB on Ubuntu. For other operating systems visit the [MongoDB Docs](https://docs.mongodb.com/manual/installation/).

### Installing

```
$ wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
```
 
## Help

* Any issues, check the link above for the MongoDB Docs.

## Authors

* Bryan Keane @ https://github.com/bryankeane0

## License

This project is licensed under the Unlicensed License - see the LICENSE.md file for details.
