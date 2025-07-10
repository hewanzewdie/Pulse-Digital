import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Partners() {
  const partners = [
    { name: "Amazon", logo: "https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png" },
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Pinterest", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" },
    { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Adobe-logo.svg/640px-Adobe-logo.svg.png" },
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/640px-Intel_logo_%282006-2020%29.svg.png" },
  { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
  { name: "LinkedIn", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
  { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/640px-Microsoft_logo.svg.png" },
  ];

  const allPartners = [...partners, ...partners];
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
    align: "start",
  });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;

    const autoplayTimer = setInterval(() => {
      if (!emblaApi.canScrollNext()) {
        emblaApi.scrollTo(0);
      } else {
        emblaApi.scrollNext();
      }
    }, 2000);

    return () => clearInterval(autoplayTimer);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const cleanup = autoplay();

    return () => {
      if (cleanup) cleanup();
    };
  }, [emblaApi, autoplay]);

  if (!allPartners || allPartners.length === 0) {
    return null;
  }

  return (
    <div id="Partners" className="py-32">
      <div className=" px-4">
        <div className="text-center  mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600">
            We've helped companies of all sizes achieve their digital marketing
            goals
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-center py-8">
              {allPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex-center h-20 rounded-lg px-8"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 max-w-[120px] grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
