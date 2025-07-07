import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Partners() {
  const partners = [
    {
      name: "Amazon",
      logo: "https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png",
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      name: "Facebook",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    },
    {
      name: "Google",
      logo: "https://images.openai.com/thumbnails/url/WOBpgHicu1mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw7KCMgtKIn0TEkpdLcMjyj3KfP1rXBzyU8ryC41LA00zUnOC0uPqLIMCio3qigwifcxdyv3Co7wLskIKlcrBgBIuysO",
    },
  ];

  const allPartners = [...partners, ...partners, ...partners];
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
    }, 2500);

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
    <div id="Partners" className="py-32 bg-purple-50">
      <div className=" px-4">
        <div className="text-center  mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
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
                  className="flex-shrink-0 border flex items-center justify-center h-20 bg-white rounded-lg px-8 shadow-sm hover:shadow-lg transition-shadow mx-6"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 max-w-[120px]"
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
