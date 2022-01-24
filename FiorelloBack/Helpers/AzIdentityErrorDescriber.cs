using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KontaktHome.Helpers
{
    public class AzIdentityErrorDescriber:IdentityErrorDescriber
    {
        public override IdentityError PasswordRequiresLower()
        {
            return new IdentityError
            {
                Code=nameof(PasswordRequiresLower),
                Description="Kiçik hərif istifadə olunmalıdır!"
            };
        }
        public override IdentityError PasswordRequiresUpper()
        {
            return new IdentityError
            {
                Code = nameof(PasswordRequiresUpper),
                Description = "Böyük hərif istifadə olunmalıdır!"
            };
        }
        public override IdentityError PasswordRequiresNonAlphanumeric()
        {
            return new IdentityError
            {
                Code = nameof(PasswordRequiresNonAlphanumeric),
                Description = "Parolların ən azı bir alfasayısal olmayan xarakteri olmalıdır.!"
            };
        }
        public override IdentityError InvalidUserName(string userName)
        {
            return new IdentityError
            {
                Code= nameof(InvalidUserName),
                Description= "İstifadəçi adı etibarsızdır, yalnız hərf və ya rəqəmdən ibarət ola bilər."

            };
        }

    }
}
