import { ComponentType } from 'react'
import { StandardProps, CommonEventFunction } from './common'
interface AudioProps extends StandardProps {
  /** audio 组件的唯一标识符
   * @supported weapp, swan, qq
   */
  id?: string

  /** 要播放音频的资源地址
   * @supported weapp, swan, qq, h5
   */
  src?: string

  /** 是否循环播放
   * @default false
   * @supported weapp, swan, qq, h5
   */
  loop?: boolean

  /** 是否静音播放
   * @default false
   * @supported h5
   */
  muted?: boolean

  /** 是否显示默认控件
   * @default false
   * @supported weapp, swan, qq, h5
   */
  controls?: boolean

  /** 默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效
   * @supported weapp, swan, qq
   */
  poster?: string

  /** 默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效
   * @default "未知音频"
   * @supported weapp, swan, qq
   */
  name?: string

  /** 默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效
   * @default "未知作者"
   * @supported weapp, swan, qq
   */
  author?: string

  /** 用于透传 `WebComponents` 上的属性到内部 H5 标签上
   * @supported h5
   */
  nativeProps?: Record<string, unknown>

  /** 当发生错误时触发 error 事件，detail = {errMsg: MediaError.code}
   * @supported weapp, swan, qq, h5
   */
  onError?: CommonEventFunction<AudioProps.onErrorEventDetail>

  /** 当开始/继续播放时触发play事件
   * @supported weapp, swan, qq, h5
   */
  onPlay?: CommonEventFunction

  /** 当暂停播放时触发 pause 事件
   * @supported weapp, swan, qq, h5
   */
  onPause?: CommonEventFunction

  /** 当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}
   * @supported weapp, swan, qq, h5
   */
  onTimeUpdate?: CommonEventFunction<AudioProps.onTimeUpdateEventDetail>

  /** 当播放到末尾时触发 ended 事件
   * @supported weapp, swan, qq, h5
   */
  onEnded?: CommonEventFunction
}
declare namespace AudioProps {
  interface onErrorEventDetail {
    errMsg: keyof MediaError.Code
  }
  interface onTimeUpdateEventDetail {
    /** 当前时间 */
    currentTime: number

    /** 持续时间 */
    duration: number
  }
  namespace MediaError {
    interface Code {
      /** 获取资源被用户禁止 */
      1

      /** 网络错误 */
      2

      /** 解码错误 */
      3

      /** 不合适资源 */
      4
    }
  }
}

/** 音频。1.6.0版本开始，该组件不再维护。建议使用能力更强的 Taro.createInnerAudioContext 接口
 * @classification media
 * @deprecated
 * @supported weapp, h5, swan
 * @example_react
 * ```tsx
 * export default class PageView extends Component {
 *   constructor() {
 *     super(...arguments)
 *   }
 *
 *   render() {
 *     return (
 *       <View className='components-page'>
 *         <Audio
 *           src='https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
 *           controls={true}
 *           autoplay={false}
 *           loop={false}
 *           muted={true}
 *           initialTime='30'
 *           id='video'
 *         />
 *       </View>
 *     )
 *   }
 * }
 * ```
 * @example_vue
 * ```html
 * <template>
 *   <view class="components-page">
 *     <audio
 *       id="video"
 *       src="https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46"
 *       :controls="true"
 *       :autoplay="false"
 *       :loop="false"
 *       :muted="true"
 *     />
 *   </view>
 * </template>
 * ```
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/audio.html
 */
declare const Audio: ComponentType<AudioProps>
export { Audio, AudioProps }
