using FiorelloBack.DAL;
using FiorelloBack.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FiorelloBack.Controllers
{
    public class FlowerController : Controller
    {
        private readonly AppDbContext _context;
        public FlowerController(AppDbContext context)
        {
            _context = context;
        }
        public IActionResult Details(int id,int categoryId)
        {
            Flower flower = _context.Flowers.Include(f=>f.Campaign).Include(f=>f.FlowerImages).Include(f=>f.FlowerCategories).ThenInclude(fc=>fc.Category).FirstOrDefault(f => f.Id == id);

            ViewBag.RelatedFlower = _context.Flowers.Include(f=>f.FlowerCategories).Include(x=>x.FlowerImages).Include(x=>x.Campaign).Where(f => f.FlowerCategories.FirstOrDefault().CategoryId == categoryId && f.Id!= id).ToList();
            return View(flower);
        }
      
    }
}
