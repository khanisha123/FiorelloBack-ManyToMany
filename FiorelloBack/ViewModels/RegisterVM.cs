using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FiorelloBack.ViewModels
{
    public class RegisterVM
    {
        [Required, StringLength(40)]
        public string UserName { get; set; }
        [Required, StringLength(40)]
        public string FullName { get; set; }
        [Required, StringLength(50)]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Required]
        [DataType(DataType.Password), Compare(nameof(Password))]
        public string ConfirimPassword { get; set; }
    }
}
