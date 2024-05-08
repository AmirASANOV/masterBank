import ServiceApi from '@/ApiConfig/Endpoints/ServiceApi';

export const ChangeVisibilityHandler = () => {
  ServiceApi.reportInaction(document.visibilityState === 'hidden')
    .then()
    .catch();
};
