import { Component } from '@angular/core';

@Component({
  selector: 'favorites-list-of-services',
  templateUrl: './favorites-list-of-services.component.html',
  styleUrls: ['./favorites-list-of-services.component.css'],
})
export class FavoritesListOfServicesComponent {
  favorites = [];

  ngOnInit() {
    this.favorites = [
      {
        id: 1,
        images: [
          'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
        ],
        country: 'United States',
        city: 'San Francisco',
        aboutService:
          'Our service is available in order to provide best for you',
        stars: 4,
        title: 'We transplant your hair in a professional way',
        price: 16000,
        countryFlag: 'https://flagsapi.com/US/flat/16.png',
        companyLogo:
          'https://upload.wikimedia.org/wikipedia/tr/thumb/0/05/Amerikan_Hastanesi_Logo.png/640px-Amerikan_Hastanesi_Logo.png',
        companyName: 'American Hospital Ltd.',
        companiesId: 1,
      },
      {
        id: 2,
        stars: 5,
        title: 'We quickly overcome the problems of your eyes',
        price: 12000,
        images: [
          'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80',
        ],
        country: 'Turkey',
        city: 'Istanbul',
        aboutService:
          'Our service is available in order to provide best for you',
        companiesId: 2,
        countryFlag: 'https://flagsapi.com/TR/flat/16.png',
        companyLogo:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAAC8CAMAAAC672BgAAAA1VBMVEX////PDi3//v/8///OACjNDi7NAB///v3MABvODirMABfnnab11Nj6///MAAvJAAzWOVL3293pqbDedILiiY7fhZLorrPefIjJAADoo6zdb3bXT1vjkJjRMUXOACPsrrb68vDbZG367e7VQlPQGzfWTV/vxcntvcDNAADSNUrjlZvdbXvlnaDy1NTTKEHrv8XZWGjWK03nf5T68evvtsTYaHD55uXVSF/gZnjjkp/SIkPQCzn2zs/ie4PxwsnVETXYV2LkpqXWQ0/egIfXVWr44efXR1cxHfv1AAAOKElEQVR4nO1ci1/ayBYeZvIiEEJ4hKCYjhGIoCB7d0Wtz9bF//9PuuecSSBYvO1a17TX+dofDWESZr6c9xnKmIaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhsZvD1vYNhN0ZDM44GVPqDxwwYkIKSUQIYRQvHxMgFDIs9uDamxZ5mgwszNuPiKEzWTXjCLfd13X9xvRpCWY9zEVxeas70b+6CqdBUFQ/9RpHkeTOvM+pnDIi+gwtfEIrIXwGEtaX48HZc+qBNiCJeYigCOOdoKDM7HBfrLx/FKID6cp3P4j3eU7vOnth/Ovwv7Pn57YQYZg9b92nf+/RoLhFmdJ8BwJkx4d1O2y5/i+4GIKjnULx1OIPg7wbFQve3rvjZpb2YLp9EFTmkalUnU/GBmc1SzTrJgFuKdEBpzdkMExVgV/szElAgI20DLOBAfkw/hWCGvjEByD0Z393AzBp8/tNKZJNivRfNcckIZKNV7Dr8GEQDLMomSQ5/X4xogoCgQxZOezhwVzURiDoQvmfoAdJhk8uV20SkArnuAlujIiozrfW+M83EEGo3UVkL0V+NfL2RDrF1Y4gqjl2cXs+ZDijctMnJGMSnxePMW3yYC5ybT7NJk3L1tLlGV8duN2u9drp3Bwcl/zSIOSsN2cTy66Y1tdxEIY0mufCZFezofzRQgyhOGcgPvzm8FoctBstxJMljmVD4L+onkw+fsqKE9RiAzjcOvcNhnCG5iuGxtGHFvOYaLC037Dii1/YP/txmBkUFc6FR/GGIblfw6V5ej6kAw3+vLIN4yqEbsHCZ2Hl/HEd+icE3fBTHggDsmhY+HlseOOgrLSo++RAZHIgQsWFh0N/LXcFJ8sa5FAdZ+sSsUCI+MlR27lXvmjqtHokeXoWjimc21V6fKqdS2V6RgcGyZ5LvjjziVYD+/GsSqmoU7G7rgEIhBIRrVIhtgiA5L8eWwSEVWgxDANNVMiA1isVKsOuB85sXBE7LoWmqCoT5Jh0ZAqrplclnMr0Gxe+VU8V4UbAk3xZ+nxwDKqcL3jOnBH+ObgW+/zXmRUjILN8J6pyQkOAA4qQyvGJ2wYckMGfBA3pkw8OuSV2+mnhQOrrhrJmgyg2nWsKtFpJuB8A5fkIrYMy0ICjBljkxjPmFdp/wipjxcbF/XuZJjD0X6Gpz5GBRsyAgzKzHh+Z7PlJa7OdAdrMqqme9Q5HbOkgYv1x57wRA2Vyp2uyTDdi1p44lRRvPy6x9m5hcQ0eiu5Gjix35Oel/r4RIYS5XKBvDTqpWTO5FpNYw3/dFsyHkn+76lEyk5wopV5bjMqxv0NQ2+I70zrEcMRRtGrcQCjFRlOFwX+Lx/UoOJ+Yp6kkNe5Ird6c7FUBMCXgP6BFrEEiXEGpeSKNWc7HLfQNxTImNDUv+BQm63woZruMifDyiKRvRjlfWYj2CO+MZKMjOqcXIMYGSgkn8AXExnmOtzCT6ugONW5rfAZNWZUSmX6e2SQLPgrlFrusX2wb/AIReZNFjRlzo5wpZVrJVsmWhYwgYoMa6Cihp6lJIN9QjLizGKrUD6JyKLck2smn2LMS6Aitxmx38hwPBVFmyHJaDYSCqwFO4yRjDQjwxqQC7XtuUG2NM/1cNmzTDIg7yMyBjkZV0RjR327TfHmKiLXi36norx41SzRmxzaMsOfUrBvJKOR4KrhKT7EqCZ3LCdDrYhPSDLixgbRjK3JYFtk9EkybotzWDZIMtzC9Y58Zx4Iz10rB2UokjEnw3enPpRD9BqN1VoyGEkGCgzEVGGxRCTFC2SkSIYx2Xwh3ABtZnU4K1w+E2VUlsibxIWgy95yreIEvYmxgLATaGq5KMEVuU0GFx0UGIjckEeBNodaczvJEMsIA1JrLDCfkT0JnwmUrIobZh5EvjMFG3wnHBfK+Duo4yKNqfrTZmyLDMZmDYqsp8TBavLAvXUE+pwMmx2hdJnDOoxZXvjGF4hNpuR3rBlmLl4aT8vK1L5DBmdPxIA76XUXyvE0VuwZGYIdWVggckdfzsJLJ7aUl9lNhghdiMLBQoxOHiCmrbiTG5GoqMU6CdPak2/403cmIe+97yJDFMjwAheSCFACy4rRfJj+FQ4pkgH3CRzyApCbuEiLO3qRDBg9slCpYO0xiogRzYSo+eSQLdd14KQZDV4ugfwr4KqpuoMMXiDD5pBQ5j4TZbnRo+u21QS1iahSY4xoimvZTQbYhKZPqQoh9kOUv66/vhxi2XhcrKq9A1aS/qnBg6/GW2TYf4kmJJFZ1srFqtmIiQ/ISo3QIxZbeJmzJoOz4A/foPVUq/7nsUrhHRjj5mTAm4wMIU98S93QcK/vBFVOQyPj3LD80RJOvK/Z6M4Y5VUQ9TmL7JyAWEJe/smaGAySmmDUwcbtIcYOxkPfRrcCA/s+DhjkU8ZAMj2/hzHR/XmaFXW7eGv31KPuZdfBNy31Laz+OPcb/rGxCIWqNYO89BdW1Gj480cyVe9rQz37YkBFa7QeWbwH/4rUWHpYmRXbgsqXK2lvdvZwz6bK91bFU8jlUlIZT43Bii8MsteHebUX3gq+QtncVNMx3khWy1L8CJauR8NQeYN1TVvcHVlLlq2xQIat9vVwDMkIHg0p1sIhebVxiJ0zm+30UPdSSYjw1OU0Eu6IpeRia4Hqy+X08SAsiuLeWOZFars+mEcXknYzbYO6AlxQmyQ7Qwei2EnBxXAaXNCd/N7ZPXPJyJotfLtLYmffVAZsLoJRFDmfTzrT6fSkGTeiYcsrs4lTIjxU3fGl0cBdTK7fcJugNWAMPloLXkHJuhxfPe6d3w5SjCz5Rso/JoQoS1F/PfBi7/hDA4yETe09ysWVp4MX9JC7hic3L9/J+6Yh+8NY/hKbH7i3SgppgEiWDGtx6ZPcLSrjyYv65MnR+LUxQuvkdde9NTpz6W2W0MJahWD9ONn9kOtfXyRDJFbfey0Z7ddd98YQA+dSbCxG2GPZ1pTdklE/en6G9zPa+E+Ejr8GGZx1+kc1b50iEhn/A9+SkVTeYBq/BhmCdVqyUV9H2f+cDDl8g2n8MmT0WVqVuYVQZPAk5VnXaBkOpmkiPJ7S/hyyGXe1qxbyhxstwpaZhmF4A5+KM0makoJTqfcHtXG+dwm00D6rDeAaj81WkL5h7lYPB6dnNqYELCOD0hK4EO8teCn7+YEMb3CQvyMyBA+GtF9WLB8qj63+Y+XQthu0hJsjFsYnp18Gk89LoEuc9Wtm2O/3x7jF+mtABvRYzIajaThdGDf5RqZpdFlrDb4O6+wwpIS3FS+mn1qHbqrKe8puczY2H2rhdDJZeXYpvdZOHxKUvx+LZHAWHOBPDtgK/APFp61hYpJJrT+EIyVGYYw+2RZKTXBvk9gPKKOvzOYrump2HKi7LhYSx4j69d1jiDLUe0iwju4trUCsJUOw9H6Gw700DsrZvt7BspxtpTT93GYEJCq8kuYpbNpUpqFuPqk6B2e9LsXwycZm7Af0UeUgwacMchMeUSGkiw0VclHyj326ZULjge/wkARA2QzpJ1kaPxvy9y0IZ0AybC9oLMm/Fsiwvf5h/kscIfaOlWREM3UZ95ZzIkN+Q4Z7KvIxRgIRXOLIvAbkjaN069uTIX2BIuNWFQWxCH1yWkq2RJLBRag6vUUy2FM930zERT1SZDREPmExTHaTcZzkpoI1Z3DmS1vkhX+bmdtksIjCX2VA3Vw1BAsmpRS8Oln1un2I9c0iGdxM1sVvITPJWLtWzg5eIMPfBGwYoIt2mHtu+HQvxYoJbjCWUoLJiTbeRFa8rPlt28mwlF5rToaYg1spkiFkvJmPbTvPyGBABr5+S4a1GULZSnstDGAkbnHLLffC+efFyfne3p67UZOgMXpa40GWpiYomdIFT7hlM+ar9SiRRD9OxsYrEhndWv4WlG6UIiXTZpKdKkrGfWFaO38K868jlwzISJ1k22acf8qtGOSxP05GvFF3ImM8yirk2MQDAwoO2ZfUGYGo7ZjGKpvh5A0Lzhgv5TelGzLY4Os2GTMz751w76DxAhmg3fmJ3WR4ojLLs1lvit5ErK6VI4fwJCp4k8PMm6iCytsu88ewIUOIRS8t2AzO2ot8oQ+D+CXJuF9PezcZgo3jZfY+vLhFMqRLMR1Emd1GgYzkOFcelnglVGJFgQzbk58fkAxb1Oe4Y4WJvUkdJ33T7NjHtMT60UZ65wn9en6COxapATsKSK2MdUeKXYzJqYZWK0G702uKvRQbMM0+GQURnjgU3hAZtgjvA1WRTa9lCd6Ei07BvIkgwrgcwvFh1u65O4qf9uPRDZMRkXFT8P8qzhBj/69g/LUOa8jCcX+dnwmIN6nXtNyzDh6G1y3O9kIMUZL5+TgIzvYPRUR2QlW6IDeJz9N6PRxNlqIEMsB/3OXH2CtMW3Sw6lLGaWM3cEk+Rbo0u1V3Y+V7UnUYg9vFyRgXfZWQiWnnZMCZOpVFccHJigLtwxuwQ3CUtheHjyBJ59TGHqvID17S3mLxiDt4fq3uDcdS8Troqk9eocTUQcRGrsi7isJKfsufiapFZN5E3J6+cms77ovbtNpn89eWScsFKErzS76ItCJfu31EeP19mR1LY8xK+bnAGyB5GraWUib1thn8xG3srtOpQ8qxrBmnbza3d4dgs07z2rze//Jz5kwkpw/Xw+tJZ/k793HX/+3MT1k9rv43H4Z9/9/SYmzhDVbw+5OgoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGh8Q/wX5C3BWmJK8SZAAAAAElFTkSuQmCC',
        companyName: 'Florence Hospital Ltd.',
      },
      {
        id: 3,
        stars: 5,
        title: 'We do your rhinoplasty without any problems',
        price: 24000,
        images: [
          'https://images.unsplash.com/photo-1605725961202-18c2678ea41e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        ],
        country: 'Germany',
        city: 'Berlin',
        countryFlag: 'https://flagsapi.com/DE/flat/16.png',
        companyLogo: 'https://medipol.com.tr/medium/General-Image-4385-2x.vsf',
        companyName: 'Medipol Hospital Ltd.',
        companiesId: 1,
      },
    ];
  }
}
