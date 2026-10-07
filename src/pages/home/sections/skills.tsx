import { FaRegComment, FaEnvelope, FaLinkedin } from "react-icons/fa6";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SkillsSection() {
  return (
    <Card className="w-full rounded-md">
      <CardHeader>
        <CardTitle className="flex flex-row justify-center items-center gap-2 text-plus">
          <FaRegComment />
          Contact
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col items-center text-center gap-6">
          <p className="text-muted-foreground">
            I would love to hear from you! Please feel free to get in contact
            with me via the links below.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:callum.hodge6@gmail.com"
              className="flex items-center gap-2 hover:text-primary hover:underline underline-offset-4"
            >
              <FaEnvelope />
              callum.hodge6@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/callum-j-hodge/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary hover:underline underline-offset-4"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
