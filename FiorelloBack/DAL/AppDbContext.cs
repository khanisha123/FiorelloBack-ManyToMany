using FiorelloBack.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FiorelloBack.DAL
{
    public class AppDbContext:IdentityDbContext<AppUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options){}

        public DbSet<Slider>Sliders { get; set; }
        public DbSet<Flower>Flowers { get; set; }
        public DbSet<FlowerImage>FlowerImages { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<FlowerCategory> FlowerCategories { get; set; }
        public DbSet<Campaign> Campaigns { get; set; }

    }
}
