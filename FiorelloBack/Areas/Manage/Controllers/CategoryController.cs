    using FiorelloBack.DAL;
using FiorelloBack.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FiorelloBack.Areas.Manage.Controllers
{
    [Area("Manage")]
    public class CategoryController : Controller
    {
        private readonly AppDbContext _context;
        public CategoryController(AppDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            List<Category> model = _context.Categories.Include(x=>x.FlowerCategories).ToList();
            return View(model);
        }
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Category category)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }
            bool isExist = _context.Categories.Any(p => p.Name.ToLower().Trim() == p.Name.ToLower().Trim());
            if (isExist)
            {
                ModelState.AddModelError("Name", "The product with this name already exists");
                View();
            }

            

            
            _context.Add(category);
            _context.SaveChanges();
            return RedirectToAction(nameof(Index));
        }

        public IActionResult Edit(int id)
        {
            Category category = _context.Categories.FirstOrDefault(x=>x.Id==id);
            return View(category);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(Category category)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }
            Category Existcategory = _context.Categories.FirstOrDefault(x => x.Id == category.Id);
            if (Existcategory == null) return NotFound();

            bool sameName = _context.Categories.Any(x => x.Name.ToLower().Trim() == category.Name.ToLower().Trim());
            if (sameName)
            {
                ModelState.AddModelError("", "Bu adda kategoriya movcutdur!!!");
                return View();
                 
            }
        
            Existcategory.Name = category.Name;
            _context.SaveChanges();
            return RedirectToAction(nameof(Index));
        }

        public IActionResult Delete(int id)
        {
            Category Existcategory = _context.Categories.FirstOrDefault(x => x.Id == id);
            if (Existcategory == null) return Json(new {status=404 });
            _context.Remove(Existcategory);
            _context.SaveChanges();
            return Json(new {status=200});
        }
    }
}
