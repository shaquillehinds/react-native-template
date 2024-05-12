interface Configuration {
  mode: 'dev' | 'staging' | 'prod';
  version: string;
  allowedVersions: string[];
  defaultApiURL: string;
  defaultTheme: AppTheme;
  runMutedLogs?: boolean;
}

const DEVELOPMENT: Configuration = {
  mode: 'dev',
  version: '0',
  allowedVersions: ['0', '1'],
  // casuarinaApiURL: 'http://localhost:3001',
  // casuarinaApiURL: 'http://172.50.6.210:3001',
  // casuarinaApiURL: 'http://192.168.1.3:3001',
  defaultApiURL: '',
  defaultTheme: 'DEFAULT',
  runMutedLogs: false,
};

const STAGING: Configuration = {
  mode: 'staging',
  version: '0',
  allowedVersions: ['0', '1'],
  defaultApiURL: '',
  defaultTheme: 'DEFAULT',
};

const PRODUCTION: Configuration = {
  mode: 'prod',
  version: '0',
  allowedVersions: ['0', '1'],
  defaultApiURL: '',
  defaultTheme: 'DEFAULT',
};

const CONFIG = DEVELOPMENT;

export default CONFIG;
