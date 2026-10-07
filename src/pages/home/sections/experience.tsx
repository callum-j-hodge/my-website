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
              I am interested in...
            </p>

            <p>
              My research focuses on...
            </p>

            <p>
              I am particularly interested in...
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/research.jpg"
              alt="Research"
              className="w-full max-w-md rounded-md object-cover"
              loading="lazy"
            />
          </div>

        </div>
      </CardContent>
    </Card>
  );
}

