using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace KontaktHome.Helpers
{
    public static class Helper
    {
        public static void DeleteFile(string root,string folder,string fileName)
        {
            string path = Path.Combine(root, folder, fileName);

            if (System.IO.File.Exists(path))
            {
                System.IO.File.Delete(path);
            }
        }
        public static async Task SendMessageAsync(string messageSubject, string messageBody, string mailTo)
        {
            
            MailMessage message = new MailMessage("testforp119@gmail.com", mailTo);
            message.Subject = messageSubject;
            message.Body = messageBody;
            message.BodyEncoding = System.Text.Encoding.UTF8;
            message.IsBodyHtml = true;
            using (SmtpClient client = new SmtpClient("smtp.gmail.com", 587))
            {
               
                client.UseDefaultCredentials = false;
                client.EnableSsl = true;
                client.Credentials = new NetworkCredential("testforp119@gmail.com", "1122334455fF$");
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                await client.SendMailAsync(message);
            }

        }
    }

    public enum Roles
    {   
        Admin,
        Satıcı,
        Müştəri
    }
}
