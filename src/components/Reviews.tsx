import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Real Reviews Data (no UI change)
const reviews = [
  {
    id: 1,
    name: "Parmar Rajnikant",
    text: "I recently visited the hospital for my daughter's treatment for blood infection. Very good services provided by the doctor. The hospital was neat and clean and the staff was very supportive. The doctor is very polite and kind at heart. I would recommend this doctor as a great pediatrician. Thank you for your great service to the nation.",
    rating: 5,
    date: "Recent",
  },
  {
    id: 2,
    name: "Arpit Gupta",
    text: "I have been suffering from allergic rhinitis for the past 20 years. Despite multiple treatments, I did not get relief. After consulting Dr. Palak Shah and starting immunotherapy, I experienced 60–70% relief within two months. Highly recommended.",
    rating: 5,
    date: "Recent",
  },
  {
    id: 3,
    name: "Fayaz Mansuri",
    text: "I recently admitted my daughter and I am extremely pleased with the quality of care and service provided. The medical team was attentive, supportive, and highly professional.",
    rating: 5,
    date: "Recent",
  },
  {
    id: 4,
    name: "Aktar Diwan",
    text: "Bahot achha hospital hai. Hum Bharuch se aaye aur doctor ne hamare bacche ko theek kar diya. Thank you to staff.",
    rating: 5,
    date: "Recent",
  },
  {
    id: 5,
    name: "Subham Baghel",
    text: "Very good experience at Jayamrut Hospital. Staff, nurses, and doctor are very helpful and knowledgeable.",
    rating: 5,
    date: "Recent",
  },
  {
    id: 6,
    name: "Rahul Dave",
    text: "Dr. Palak Shah managed my son’s typhoid treatment with great professionalism and care. Cleanliness and staff support were excellent.",
    rating: 5,
    date: "Recent",
  },
  {
    id: 7,
    name: "Ghanshyam",
    text: "Very good hospital. Staff are cooperative and hygiene is well maintained. Healthy environment.",
    rating: 5,
    date: "Recent",
  },
  {
    id: 8,
    name: "Bhushan Pardeshi",
    text: "The treatment is superb. I have been coming here for 2 years and I am satisfied with the treatment.",
    rating: 5,
    date: "Recent",
  },
  {
    id: 9,
    name: "Shivam Pandey",
    text: "Staff were extremely professional and attentive. Dr. Palak Shah explained everything clearly. Highly recommended.",
    rating: 5,
    date: "Recent",
  },
  {
    id: 10,
    name: "Shahid Libas",
    text: "Excellent hospital. We brought our newborn and doctor and staff treated us very well. Highly recommended.",
    rating: 5,
    date: "Recent",
  },
  {
    id: 11,
    name: "Imran Ghanchi",
    text: "Very good hospital. My child was admitted for respiratory distress and became well in 2–3 days.",
    rating: 5,
    date: "Recent",
  },
  {
    id: 12,
    name: "Ankit Tambe",
    text: "Jayamrut Hospital is an excellent choice for pediatric care. Dr. Palak Shah is highly skilled and patient.",
    rating: 5,
    date: "Recent",
  },
  {
    id: 13,
    name: "Manasi Mohanachandran",
    text: "We have been visiting Dr. Palak Shah for 3 years. He avoids unnecessary medicines and is always available.",
    rating: 5,
    date: "Recent",
  },
];

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 2000, stopOnInteraction: true })],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Patient <span className="text-gradient">Reviews</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Don't just take our word for it. Read what our patients have to
              say about their experience at Jayamrut Hospital.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-medical-50 hover:text-medical-600 hover:border-medical-200 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-medical-50 hover:text-medical-600 hover:border-medical-200 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-12 md:w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-12 md:w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-100 flex flex-col">
                    <Quote className="w-10 h-10 text-medical-200 mb-4" />

                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    <p className="text-slate-700 mb-6 flex-grow italic">
                      "{review.text}"
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200">
                      <h4 className="font-bold text-slate-900">
                        {review.name}
                      </h4>
                      <span className="text-xs text-slate-500">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
