using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

public class User : IdentityUser
{
    [Required]
    public string Firstname { get; set; }

    [Required]
    public string Lastname { get; set; }
}