/* Types */
import CreateTopicService from "../../service/CreateTopicService";
import GetTopicDetailService from "../../service/GetTopicDetailService";
import { DATA_TYPE } from "../Constants";
import type {
  RichTextType,
  CodeTextType,
  QuoteTopicType,
  TwitterWidgetType,
  ContentType,
} from "../types/CommonTypes";

// TODO separate display page action out of create page action

export const UPDATE_TEXT_CONTENT = "UPDATE_TEXT_CONTENT";
export const UPDATE_CODE_SNIPPET = "UPDATE_CODE_SNIPPET";
export const UPDATE_TWITTER_WIDGET = "UPDATE_TWITTER_WIDGET";
export const DELETE_CONTENT = "DELETE_CONTENT";
export const MOVE_CONTENT_UP = "MOVE_CONTENT_UP";
export const MOVE_CONTENT_DOWN = "MOVE_CONTENT_DOWN";
export const UPDATE_QUOTE_TOPIC = "UPDATE_QUOTE_TOPIC";
export const CREATE_TOPIC = "CREATE_TOPIC";
export const CREATE_TOPIC_FULFILLED = "CREATE_TOPIC_FULFILLED";
export const UPDATE_TOPIC_TITLE = "UPDATE_TOPIC_TITLE";
export const RESET_STATE = "RESET_STATE";

export const FETCH_TOPIC_DETAIL = "FETCH_TOPIC_DETAIL";
export const FETCH_TOPIC_DETAIL_FULFILLED = "FETCH_TOPIC_DETAIL_FULFILLED";

export const updateTopicTitle = (title: string) => ({
  type: UPDATE_TOPIC_TITLE,
  payload: title,
});
export const updateTextContent = (richText: RichTextType) => ({
  type: UPDATE_TEXT_CONTENT,
  payload: richText,
});

export const updateCodeSnippet = (codeText: CodeTextType) => ({
  type: UPDATE_CODE_SNIPPET,
  payload: codeText,
});

export const updateTwitterWidget = (twitter: TwitterWidgetType) => ({
  type: UPDATE_TWITTER_WIDGET,
  payload: twitter,
});

export const deleteContent = (id: number) => ({
  type: DELETE_CONTENT,
  payload: id,
});

export const moveContentUp = (id: number) => ({
  type: MOVE_CONTENT_UP,
  payload: id,
});

export const moveContentDown = (id: number) => ({
  type: MOVE_CONTENT_DOWN,
  payload: id,
});

export const updateQuoteTopic = (quoteTopic: QuoteTopicType) => ({
  type: UPDATE_QUOTE_TOPIC,
  payload: quoteTopic,
});

export const createTopic = (
  title: string,
  content: Array<ContentType>,
  token: string
) => ({
  type: CREATE_TOPIC,
  payload: () => {
    let body = [];
    for (let i = 0; i < content.length; i++) {
      if (content[i]?.type === DATA_TYPE.RICH_TEXT) {
        body.push({
          // @ts-ignore
          title: content[i]?.title,
          body: JSON.stringify(content[i]?.body),
          position: i,
          type: DATA_TYPE.RICH_TEXT,
        });
      } else if (content[i]?.type === DATA_TYPE.TWITTER_WIDGET) {
        body.push({
          type: DATA_TYPE.TWITTER_WIDGET,
          body: content[i]?.body,
          position: i,
        });
      } else if (content[i]?.type === DATA_TYPE.CODE) {
        body.push({
          type: DATA_TYPE.CODE,
          body: content[i]?.body,
          position: i,
          // @ts-ignore
          language: content[i]?.language,
        });
      }
    }
    return CreateTopicService(title, body, token);
  },
});

export const resetState = () => ({
  type: RESET_STATE,
});

export const fetchTopicDetail = (topicId: string) => ({
  type: FETCH_TOPIC_DETAIL,
  payload: async () => {
    const data = GetTopicDetailService(topicId);
    console.log(">>>>>> data ", data);
    return data;
  },
});
