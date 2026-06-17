import type { InsightPost } from "./types";
import whyNobodyTrusts from "./why-nobody-trusts-the-pipeline-report";
import integratingWithHubspot from "./integrating-with-hubspot";
import yourCrmKnowsEverything from "./your-crm-knows-everything";

const posts: InsightPost[] = [whyNobodyTrusts, integratingWithHubspot, yourCrmKnowsEverything]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default posts;
export { type InsightPost } from "./types";
