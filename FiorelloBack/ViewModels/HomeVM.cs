using FiorelloBack.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FiorelloBack.ViewModels
{
    public class HomeVM
    {
        public List<Category> Categories { get; set; }
        public List<Flower> Flowers { get; set; }
        public List<Slider> Sliders { get; set; }
        
    }
}
