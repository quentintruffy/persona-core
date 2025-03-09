// Auto-generated imports for jobs clients
import { MetroDriverClient } from '../jobs/metrodriver/client';
import { JobRegistry } from '../jobs/types/JobRegistry';

const registry = JobRegistry.instance;

// Enregistrement des jobs client
registry.registerClientJob('metrodriver', MetroDriverClient);

// Initialisation des jobs client
registry.initClientJobs();
