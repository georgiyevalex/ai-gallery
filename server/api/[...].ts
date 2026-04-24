import { joinURL } from 'ufo';

export default defineEventHandler(async (event) => {
  const { apiBaseUrl } = useRuntimeConfig();
  const path = event.path.replace(/^\/api\//, '/');
  const target = joinURL(apiBaseUrl, path);
  return proxyRequest(event, target);
});
