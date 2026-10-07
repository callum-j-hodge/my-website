import { FaGraduationCap } from "react-icons/fa6";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExperienceSection() {
  return (
    <Card className="w-full rounded-md">
      <CardHeader>
        <CardTitle className="flex flex-row justify-center items-center gap-2 text-plus">
          <FaGraduationCap />
          Research Interests
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Research interests text */}
          <div className="space-y-4">
            <p>
              <strong>Black holes</strong>strong> are, quite possibly, the strangest and most fascinating single objects in the entire Universe. 
              Their existence pushes science into regimes far beyond our everyday experience, and they have a profound influence on the history and evolution of the Universe and the stars and galaxies that inhabit it. 
              Despite this, observational signatures of isolated black holes, in particular stellar-mass black holes, are rare, because black holes do not emit detectable electromagnetic radiation. 
              Therefore, observations of black holes largely rely on their significant gravitational influence on the surrounding media. 
            </p>

            <p>
              <strong>X-rays</strong> are a common wavelength used to detect stellar-mass black holes. For example, X-rays can be used to detect black holes that accrete matter from a main sequence companion star. 
              These systems are known as <strong>X-ray binaries</strong>. If a star gets too close to a black hole, it may undergo spaghettification as it is pulled apart by the black hole’s intense gravity. 
              These are known as <strong>tidal disruption events</strong>, and can also be viewed at X-ray wavelengths. I am enthusiastic at the prospect of being able to explore these research areas in the future.
            </p>

            <p>
              Black holes can also be viewed in <strong>radio</strong> wavelengths. This area of research has been revolutionised in the past decade by the <strong>Event Horizon Telescope</strong> (EHT). 
              Consisting of multiple observatories around the globe, this interferometry network has produced the very first horizon-scale images of the environment surrounding black holes (such as the one on the right!) – a landmark achievement in black hole research. 
              As a result, this opens up a plethora of new opportunities to probe the observational features of black holes and learn more about the physics that govern their behaviour. Such an area of research is another that I would be passionate to pursue for a future career in astrophysics. 
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={`${import.meta.env.BASE_URL}images/research.jpg`}
              alt="Research interests"
              className="w-full max-w-sm aspect-square rounded-md object-cover"
              loading="lazy"
            />
          </div>

        </div>
      </CardContent>
    </Card>
  );
}

