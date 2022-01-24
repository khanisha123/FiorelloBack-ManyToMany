using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FiorelloBack.Models
{
    public class Campaign
    {
        public int Id { get; set; }
        public int? Dicount { get; set; }
        public List<Flower> Flowers { get; set; }
    }
}
