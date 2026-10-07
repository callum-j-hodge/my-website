import { FaRegIdBadge, FaDownload } from "react-icons/fa6";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const cvPath = `${import.meta.env.BASE_URL}pdf/CVDocument2.pdf`;

  return (
    <div className="space-y-6">
      <div className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
        <FaRegIdBadge />
        Curriculum Vitae
      </div>

      <div className="flex flex-col items-center gap-4">
        {/* CV preview */}
        <Card className="w-full max-w-3xl overflow-hidden rounded-md">
          <div className="w-full aspect-[1/1.414]">
            <iframe
              src={cvPath}
              title="Curriculum Vitae"
              className="w-full h-full border-0"
            />
          </div>
        </Card>

        {/* Download button */}
        <Button asChild variant="outline" size="sm" className="gap-2">
          <a href={cvPath} download="CVDocument2.pdf">
            <FaDownload className="w-4 h-4" />
            Download CV
          </a>
        </Button>
      </div>
    </div>
  );
}
