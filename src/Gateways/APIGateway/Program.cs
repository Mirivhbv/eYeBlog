using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace APIGateway
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) => 
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder => 
                {
                    webBuilder.ConfigureAppConfiguration(builder =>
                    {
                        const string extension = "yml";
                        var ntradaConfig = Environment.GetEnvironmentVariable("NTRADA_CONFIG");
                        var configPath = args?.FirstOrDefault() ?? ntradaConfig ?? $"ntrada.{extension}";

                        if (!configPath.EndsWith($".{extension}"))
                        {
                            configPath += $".{extension}";
                        }

                        builder.AddYmlFile(configPath, false);
                    })
                })
    }
}