using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Lab2.Models;

namespace Lab2.Controllers
{
    public class CatalogController : Controller
    {
        private readonly ILogger<CatalogController> _logger;
        private DataContext dbContext;

        //Class Constructor
        public CatalogController(DataContext context)
        {
            this.dbContext=context;
        }

        //to Show the catalog of CARS available to rent
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Register(){
            return View();
        }

        [HttpPost]
        public IActionResult SaveCar([FromBody]Cars car){

            dbContext.Cars.Add(car);
            dbContext.SaveChanges();

            return Json(car);


        }

        [HttpGet]
        public IActionResult GetCatalog(){
            var car_list=dbContext.Cars.ToList();

            return Json(car_list);

        }

    }
}
