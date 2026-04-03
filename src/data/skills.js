import {
  SparklesIcon,
  CubeIcon,
  CloudArrowUpIcon,
  Cog8ToothIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

export const skillGroups = [
  {
    category: "Frontend",
    description: "Component-first experiences with polish.",
    icon: SparklesIcon,
    skills: [
      { name: "React.js", detail: "Hook-driven SPA architecture" },
      { name: "Next.js", detail: "Server-rendered microfrontends" },
      { name: "Tailwind CSS", detail: "Utility-first layouts & theming" },
      { name: "Material UI", detail: "Design system + component library" },
      { name: "Cloudscape Design System", detail: "AWS-aligned UI tokens" },
    ],
  },
  {
    category: "Backend",
    description: "Serverless APIs and resilient data layers.",
    icon: CubeIcon,
    skills: [
      { name: "Python", detail: "Backend logic and data processing" },
      { name: "AWS Lambda", detail: "Event-driven GraphQL & REST" },
      { name: "GraphQL (AppSync)", detail: "Typed schema + auth" },
      { name: "REST APIs", detail: "Clean abstractions & docs" },
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
      },
      { name: "Terraform", detail: "Modular, reusable infrastructure" },
    ],
  },
  {
    category: "Tools & Practices",
    description: "Quality, automation, and collaboration.",
    icon: Cog8ToothIcon,
    skills: [
      { name: "Git & GitHub", detail: "Feature branches + PR reviews" },
      { name: "SonarQube", detail: "Code quality gates" },
      { name: "ESLint & Prettier", detail: "Linting + formatting synced" },
      { name: "Postman & Swagger", detail: "API contracts + testing" },
      { name: "AWS CLI", detail: "Scriptable releases & debugging" },
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
      },
      {
        name: "Amazon Q",
        detail:
          "Utilized for programming assistance, debugging, and understanding AWS-specific implementations",
      },
      {
        name: "Claude",
        detail:
          "Used for research, requirement analysis, and generating technical documentation",
      },
      {
        name: "OpenAI Codex",
        detail:
          "Leveraged as an AI agent to generate production-ready application code and automate development workflows",
      },
    ],
  },
];
