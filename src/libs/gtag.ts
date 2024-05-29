export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''


// PVを測定する
export const pageview = (path: string): void => {
  // 測定IDが設定されていない場合は終了
  if (!GA_ID) return;

  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

type ContactEvent = {
  action: 'submit_form'
  category: 'contact'
  label: string
}

type ClickEvent = {
  action: 'click'
  category: 'other'
  label: string
}

export type Event = ContactEvent | ClickEvent

// GAイベントを発火させる
export const event = ({action, category, label}: Event) => {
  if (!GA_ID) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label)
  })
}