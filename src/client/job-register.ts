// Auto-generated imports for jobs clients
import { MetroDriverClient } from '../jobs/metrodriver/client';
import { PhoneClient } from '../jobs/phone/client';
import { JobRegistry } from '../jobs/types/JobRegistry';

const registry = JobRegistry.instance;

// Enregistrement des jobs client
registry.registerClientJob('metrodriver', MetroDriverClient);
registry.registerClientJob('phone', PhoneClient);

// Initialisation des jobs client
registry.initClientJobs();
