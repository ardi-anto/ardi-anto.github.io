const profileData = {
  projects: [
    {
      id: "hunian",
      title: "Hunian by Rakutek",
      description: "A web-based housing/cluster management system designed to streamline resident interactions, socialization among occupants, and transparent neighborhood governance. This application simplifies administrative access, reporting, financial dues, and neighborhood security.",
      icon: "house",
      iconColor: "primary",
      stars: "none",
      forks: "none",
      // stats: { label: "Latency overhead:", value: "< 0.42ms p99", color: "tertiary" },
      tags: ["Next JS", "Node JS", "Flutter", "Vercel", "GCP", "Docker"],
      sourceUrl: "https://gitlab.com/rukatek/hunian/hunian-app",
      demoUrl: "https://hunian-app-ashy.vercel.app/",
      demoLabel: "Live Demo",
      demoIcon: "open_in_new",
      category: "distributed",
      version: "v1.0.0 (stable)",
      expandedDescription: "",
      expandedStats: [
        { label: "Kernel Hook:", value: "TC + XDP eBPF", color: "tertiary" },
      ],
      repoUrl: "gitlab.com/rukatek/hunian",
      repoIcon: "deployed_code"
    },
  ],
  skills: [
    {
      id: "backend-arch",
      title: "Backend Arch",
      subtitle: "Distributed Systems",
      description: "Microservices, event-driven architectures, domain-driven design, and fault-tolerant streaming pipelines.",
      icon: "dns",
      iconColor: "primary",
      tags: ["Go", "Java/Kotlin", "gRPC", "REST API", "Apache Kafka", "RabbitMQ"]
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      subtitle: "Infrastructure as Code",
      description: "Immutable infrastructure, declarative container orchestration, continuous delivery, and full-stack observability.",
      icon: "cloud_sync",
      iconColor: "tertiary",
      tags: ["Kubernetes", "Terraform", "AWS", "GCP", "Docker", "Prometheus"]
    },
    {
      id: "frontend-eng",
      title: "Frontend Eng",
      subtitle: "UI Architecture",
      description: "Reactive interfaces, state management architectures, complex data visualization, and accessibility standards.",
      icon: "terminal",
      iconColor: "secondary",
      tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Zustand", "WebSockets"]
    },
  ]
};
