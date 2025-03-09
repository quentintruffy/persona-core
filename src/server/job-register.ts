// Auto-generated imports for jobs servers
import { MetroDriverServer } from '../jobs/metrodriver/server';
import { JobRegistry } from '../jobs/types/JobRegistry';

const registry = JobRegistry.instance;

// Enregistrement des jobs server
registry.registerServerJob('metrodriver', MetroDriverServer);

// Initialisation des jobs server
registry.initServerJobs();
