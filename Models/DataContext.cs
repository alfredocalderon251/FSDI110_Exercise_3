using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;


namespace Lab2.Models{

/*
Represents the connection with the DB
will be used to access different tables (classes)
to retrieve and store information/records*/
    public class DataContext : DbContext{

        public DataContext(DbContextOptions<DataContext> options) : base(options){

        }

        //Specify which model requires a table in the DB

        public DbSet<Cars>Cars{get;set;}


    }
}