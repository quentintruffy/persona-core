// Auto-generated imports for jobs servers
import { MetroDriverServer } from '../jobs/metrodriver/server';
import { PhoneServer } from '../jobs/phone/server';
import { JobRegistry } from '../jobs/types/JobRegistry';

const registry = JobRegistry.instance;

// Enregistrement des jobs server
registry.registerServerJob('metrodriver', MetroDriverServer);
registry.registerServerJob('phone', PhoneServer);

// Initialisation des jobs server
registry.initServerJobs();
