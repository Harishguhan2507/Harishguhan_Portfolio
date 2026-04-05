import {
  SparklesIcon,
  CubeIcon,
  CloudArrowUpIcon,
  Cog8ToothIcon,
  BoltIcon,
  Squares2X2Icon,
  ViewColumnsIcon,
  GlobeAltIcon,
  DocumentDuplicateIcon,
  CloudIcon,
  CodeBracketSquareIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  ArrowPathRoundedSquareIcon,
  CommandLineIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  ChatBubbleBottomCenterTextIcon,
  CodeBracketIcon,
  ServerStackIcon,
} from "@heroicons/react/24/solid";
import { ReactIcon, NextIcon, PythonIcon, AwsIcon } from "../assets/icons/techIcons";

export const skillGroups = [
  {
    category: "Frontend",
    description: "Component-first experiences with polish.",
    icon: SparklesIcon,
    skills: [
      {
        name: "React.js",
        detail: "Hook-driven SPA architecture",
        icon: ReactIcon,
        iconColor: "text-[#61dafb]",
      },
      {
        name: "Next.js",
        detail: "Server-rendered microfrontends",
        icon: NextIcon,
        iconColor: "text-slate-900 dark:text-slate-100",
      },
      {
        name: "Tailwind CSS",
        detail: "Utility-first layouts & theming",
        icon: Squares2X2Icon,
        iconColor: "text-cyan-500",
      },
      {
        name: "Material UI",
        detail: "Design system + component library",
        icon: SparklesIcon,
        iconColor: "text-emerald-500",
      },
      {
        name: "Cloudscape Design System",
        detail: "AWS-aligned UI tokens",
        icon: ViewColumnsIcon,
        iconColor: "text-orange-400",
      },
    ],
  },
  {
    category: "Backend",
    description: "Serverless APIs and resilient data layers.",
    icon: CubeIcon,
    skills: [
      {
        name: "Python",
        detail: "Backend logic and data processing",
        icon: PythonIcon,
        iconColor: "text-[#3776AB]",
      },
      {
        name: "AWS Lambda",
        detail: "Event-driven GraphQL & REST",
        icon: ServerStackIcon,
        iconColor: "text-amber-500",
      },
      {
        name: "GraphQL (AppSync)",
        detail: "Typed schema + auth",
        icon: GlobeAltIcon,
        iconColor: "text-violet-500",
      },
      {
        name: "REST APIs",
        detail: "Clean abstractions & docs",
        icon: DocumentDuplicateIcon,
        iconColor: "text-slate-500",
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    description: "Infrastructure-as-code and observability.",
    icon: CloudArrowUpIcon,
    skills: [
      {
        name: "AWS",
        detail: "S3, DynamoDB, Cognito, CloudWatch, Step Functions, SNS, SQS",
        icon: AwsIcon,
        iconColor: "text-orange-500",
      },
      {
        name: "Terraform",
        detail: "Modular, reusable infrastructure",
        icon: CloudIcon,
        iconColor: "text-cyan-500",
      },
    ],
  },
  {
    category: "Tools & Practices",
    description: "Quality, automation, and collaboration.",
    icon: Cog8ToothIcon,
    skills: [
      {
        name: "Git & GitHub",
        detail: "Feature branches + PR reviews",
        icon: CodeBracketSquareIcon,
        iconColor: "text-sky-600",
      },
      {
        name: "SonarQube",
        detail: "Code quality gates",
        icon: ShieldCheckIcon,
        iconColor: "text-emerald-500",
      },
      {
        name: "ESLint & Prettier",
        detail: "Linting + formatting synced",
        icon: WrenchScrewdriverIcon,
        iconColor: "text-orange-500",
      },
      {
        name: "Postman & Swagger",
        detail: "API contracts + testing",
        icon: ArrowPathRoundedSquareIcon,
        iconColor: "text-slate-600",
      },
      {
        name: "AWS CLI",
        detail: "Scriptable releases & debugging",
        icon: CommandLineIcon,
        iconColor: "text-slate-700",
      },
    ],
  },
  {
    category: "AI Tools",
    description: "AI-assisted research and development.",
    icon: BoltIcon,
    skills: [
      {
        name: "GitHub Copilot",
        detail:
          "Used for improving code structure, enforcing best practices, and accelerating development with AI-assisted suggestions",
        icon: LightBulbIcon,
        iconColor: "text-amber-500",
      },
      {
        name: "Amazon Q",
        detail:
          "Utilized for programming assistance, debugging, and understanding AWS-specific implementations",
        icon: PuzzlePieceIcon,
        iconColor: "text-indigo-500",
      },
      {
        name: "Claude",
        detail:
          "Used for research, requirement analysis, and generating technical documentation",
        icon: ChatBubbleBottomCenterTextIcon,
        iconColor: "text-sky-500",
      },
      {
        name: "OpenAI Codex",
        detail:
          "Leveraged as an AI agent to generate production-ready application code and automate development workflows",
        icon: CodeBracketIcon,
        iconColor: "text-purple-500",
      },
    ],
  },
];
