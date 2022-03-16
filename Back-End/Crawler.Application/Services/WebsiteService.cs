﻿using Crawler.Application.DTOs.Website;
using Crawler.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crawler.Application.Services
{
    public class WebsiteService : BaseService<WebsiteEntity, WebsiteDTO>, IWebsiteService
    {
        public WebsiteService(IMapper mapper, IWebsiteRepository repository) : base(mapper, repository)
        {
        }

        //public override async Task UpdateAsync(WebsiteDTO viewModel, params object[] keys)
        //{
        //    var data = viewModel.RequestHeaderCookie.Split("\n");
        //}
    }
}
