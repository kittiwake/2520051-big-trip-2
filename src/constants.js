const AUTHORIZATION = 'Basic if85f74ls8';
const END_POINT = 'https://23.objects.htmlacademy.pro/big-trip';

const Url = {
  POINTS: 'points',
  DESTINATIONS: 'destinations',
  OFFERS: 'offers'
};

const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
};

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const DateFormat = {
  DATE_TIME: 'YYYY-MM-DDTHH:mm',
  HUMAN: 'MMM D',
  HUMAN_: 'D MMM',
  TIME: 'HH:mm',
  DATE_DB: 'YYYY-MM-DD',
  BRITAIN: 'DD/MM/YY HH:mm',
  DAY: 'D'
};

const DataStatus = {
  EMPTY: 'Click New Event to create your first point',
  FUTURE_EMPTY: 'There are no future events now',
  PRESENT_EMPTY: 'There are no present events now',
  PAST_EMPTY: 'There are no past events now',
  ERROR: 'Failed to load latest route information',
  LOADING: 'Loading...'
};

const Filter = {
  DEFAULT: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const SortType = {
  DEFAULT: 'day',
  TIME: 'time',
  PRICE: 'price',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  WITHOUT_FORM: 'WITHOUT_FORM',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
  ADDING: 'ADDING'
};

export { AUTHORIZATION, END_POINT, Url, Method, RenderPosition, DateFormat, DataStatus, Filter, SortType, UserAction, UpdateType, Mode };
