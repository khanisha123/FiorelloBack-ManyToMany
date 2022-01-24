using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FiorelloBack.Models
{
    public class FlowerImage
    {
        public int Id { get; set; }
        public string Image { get; set; }
        public bool IsMain { get; set;}
        public int FlowerId { get; set; }
        public Flower Flower { get; set; }

    }
}
