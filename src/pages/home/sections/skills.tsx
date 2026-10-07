import { FaRegComment, FaEnvelope, FaLinkedin } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-row justify-center items-center gap-2 text-plus font-semibold">
        <FaRegComment />
        Contact
      </div>

      <div className="flex flex-col items-center text-center gap-6">
        <p>
          I would love to hear from you! Please feel free to get in contact
          with me via the links below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:callum.hodge6@gmail.com"
            className="flex items-center gap-2 text-lg font-medium hover:text-primary hover:underline underline-offset-4"
          >
            <FaEnvelope className="w-5 h-5" />
            callum.hodge6@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/callum-j-hodge/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg font-medium hover:text-primary hover:underline underline-offset-4"
          >
            <FaLinkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
