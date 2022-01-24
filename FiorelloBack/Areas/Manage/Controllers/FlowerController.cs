using FiorelloBack.DAL;
using FiorelloBack.Models;
using KontaktHome.Extensions;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FiorelloBack.Areas.Manage.Controllers
{
    //[Area("Manage")]
    //public class FlowerController : Controller
    //{
    //    private readonly AppDbContext _context;
    //    private readonly IWebHostEnvironment _env;
    //    public FlowerController(AppDbContext context, IWebHostEnvironment env)
    //    {
    //        _context = context;
    //        _env = env;
    //    }
    //    public IActionResult Index()
    //    {
    //        List<Flower> flower = _context.Flowers.Include(f => f.FlowerImages).ToList();
    //        return View(flower);
    //    }
    //    public IActionResult Create()
    //    {
    //        ViewBag.Campaigns = _context.Campaigns.ToList();
    //        ViewBag.Categories = _context.Categories.ToList();
    //        return View();
    //    }
    //    [HttpPost]
    //    [ValidateAntiForgeryToken]
    //    public IActionResult Create(Flower flower)
    //    {
    //        ViewBag.Campaigns = _context.Campaigns.ToList();
    //        ViewBag.Categories = _context.Categories.ToList();
    //        if (!ModelState.IsValid) return View();
    //        if (flower.CampaignId==0)
    //        {
    //            flower.CampaignId = null;
    //        }
    //        flower.FlowerCategories = new List<FlowerCategory>();
    //        flower.FlowerImages = new List<FlowerImage>();
    //        foreach (var id in flower.CategoryIds)
    //        {
    //            FlowerCategory fCategory = new FlowerCategory()
    //            {
    //                CategoryId = id,
    //                FlowerId = flower.Id

    //            };
    //            flower.FlowerCategories.Add(fCategory);
    //        }
    //        foreach (var image in flower.ImageFilies)
    //        {
    //            image.IsValidType("image/");
    //            image.IsValidSize(200);
   
    //        }
    //        foreach (var image in flower.ImageFilies)
    //        {
    //            FlowerImage fimage = new FlowerImage()
    //            {
    //                Image = image.SavaFile(_env.WebRootPath, "assets/images"),
    //                IsMain = flower.FlowerImages.Count < 1 ? true : false,
    //                FlowerId = flower.Id
    //            };
    //            flower.FlowerImages.Add(fimage);
    //        }
    //        _context.Flowers.Add(flower);
    //        _context.SaveChanges();
    //        return RedirectToAction(nameof(Index));
    //    }
    //    public IActionResult Edit(int id)
    //    {
    //        ViewBag.Campaigns = _context.Campaigns.ToList();
    //        ViewBag.Categories = _context.Categories.ToList();
    //        Flower flower = _context.Flowers.FirstOrDefault(x => x.Id == id);
    //        return View(flower);
    //    }
    //}
}
