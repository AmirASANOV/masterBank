import React from 'react';

import { IconProps, iconsConfig } from './IconConfig';

export const ViberNoCircle: React.FC<IconProps> = ({
  color,
  size,
  containerClassName,
  containerStyle,
}) => (
  <div
    style={{
      width: size || iconsConfig.sizes.width,
      height: size || iconsConfig.sizes.height,
      flexShrink: 0,
      ...containerStyle,
    }}
    className={containerClassName}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2989 0.00407432C11.0519 0.0311993 6.22107 0.400449 3.51907 2.87932C1.50919 4.87082 0.807442 7.8152 0.725192 11.4561C0.656942 15.0838 0.574691 21.8966 7.14157 23.7516V26.577C7.14157 26.577 7.10044 27.7075 7.84769 27.9393C8.76819 28.2307 9.29232 27.361 10.1673 26.4265L11.7992 24.5811C16.2923 24.9547 19.7337 24.0937 20.1301 23.966C21.0418 23.6746 26.1772 23.0183 27.0163 16.2047C27.8773 9.16795 26.5972 4.73432 24.2863 2.72882H24.2723C23.5749 2.08657 20.7723 0.0443243 14.5108 0.0215743C14.5108 0.0215743 14.0462 -0.00992568 13.2989 0.00319932V0.00407432ZM13.3759 1.98245C14.0138 1.97807 14.4014 2.0052 14.4014 2.0052C19.7013 2.0192 22.2309 3.61432 22.8277 4.15157C24.7737 5.81932 25.7764 9.81633 25.0423 15.6911C24.3449 21.3873 20.1799 21.7478 19.4091 21.9937C19.0809 22.0987 16.0499 22.846 12.2314 22.6001C12.2314 22.6001 9.38769 26.0318 8.49869 26.9156C8.35782 27.0705 8.19332 27.116 8.08832 27.0932C7.93782 27.0565 7.89232 26.8701 7.90107 26.6146L7.92819 21.9255C2.35882 20.3855 2.68694 14.5746 2.74644 11.5392C2.81469 8.50383 3.38432 6.02057 5.08007 4.33882C7.36294 2.2747 11.4649 1.99645 13.3742 1.98245H13.3759ZM13.7959 5.01695C13.7501 5.01649 13.7046 5.0251 13.6621 5.0423C13.6196 5.05949 13.581 5.08493 13.5484 5.11714C13.5157 5.14935 13.4898 5.1877 13.4721 5.22997C13.4544 5.27224 13.4452 5.31761 13.4451 5.36345C13.4451 5.55945 13.6043 5.71432 13.7959 5.71432C14.6635 5.69783 15.5258 5.85325 16.333 6.17162C17.1402 6.49 17.8764 6.96503 18.4991 7.56932C19.7704 8.80395 20.3899 10.463 20.4136 12.6321C20.4136 12.8237 20.5684 12.983 20.7644 12.983V12.969C20.8568 12.9692 20.9455 12.9329 21.0113 12.868C21.077 12.8031 21.1144 12.7148 21.1153 12.6224C21.1578 11.6015 20.9922 10.5825 20.6287 9.62747C20.2651 8.67245 19.7111 7.80134 19.0004 7.06707C17.6153 5.71345 15.8601 5.01607 13.7959 5.01607V5.01695ZM9.18382 5.81932C8.93615 5.78314 8.68355 5.83285 8.46807 5.9602H8.44969C7.94942 6.25345 7.49875 6.62408 7.11444 7.05833C6.79507 7.42758 6.62182 7.8012 6.57632 8.16082C6.54919 8.3752 6.56757 8.58957 6.63144 8.79432L6.65419 8.80833C7.01382 9.86533 7.48369 10.8821 8.05769 11.8393C8.79709 13.1842 9.70703 14.4279 10.7649 15.5397L10.7964 15.5852L10.8463 15.622L10.8778 15.6587L10.9146 15.6902C12.0304 16.7512 13.2771 17.6654 14.6246 18.4106C16.1646 19.2488 17.0991 19.6452 17.6599 19.8097V19.8185C17.8244 19.8683 17.9741 19.8911 18.1246 19.8911C18.6026 19.8561 19.0551 19.662 19.4099 19.3398C19.8422 18.9554 20.2087 18.5029 20.4949 18.0002V17.9915C20.7636 17.4857 20.6726 17.0071 20.2849 16.6833C19.5087 16.0048 18.6692 15.4021 17.7781 14.8835C17.1813 14.5597 16.5749 14.7557 16.3291 15.0838L15.8049 15.7445C15.5363 16.0726 15.0481 16.0271 15.0481 16.0271L15.0341 16.0358C11.3932 15.1057 10.4219 11.4193 10.4219 11.4193C10.4219 11.4193 10.3764 10.918 10.7133 10.6624L11.3696 10.134C11.6837 9.87845 11.9024 9.27295 11.5656 8.67533C11.0505 7.78296 10.4492 6.94331 9.77007 6.16845C9.62161 5.98578 9.41333 5.86149 9.18207 5.81757L9.18382 5.81932ZM14.4014 6.85882C13.9368 6.85882 13.9368 7.56058 14.4058 7.56058C14.9836 7.56995 15.5538 7.69308 16.0839 7.92294C16.6141 8.1528 17.0937 8.48488 17.4954 8.9002C17.8619 9.30446 18.1435 9.77816 18.3236 10.2932C18.5036 10.8083 18.5785 11.3543 18.5437 11.8988C18.5453 11.991 18.5829 12.0788 18.6485 12.1436C18.7141 12.2084 18.8024 12.2449 18.8946 12.2453L18.9086 12.2637C19.0014 12.263 19.0903 12.2258 19.1559 12.1602C19.2216 12.0945 19.2588 12.0057 19.2594 11.9128C19.2909 10.5225 18.8587 9.35608 18.0108 8.42158C17.1586 7.48708 15.9694 6.96295 14.4513 6.85882H14.4014ZM14.9763 8.74533C14.4977 8.73133 14.4793 9.44707 14.9536 9.46107C16.1068 9.52057 16.6668 10.1033 16.7403 11.3021C16.7419 11.3931 16.7791 11.4798 16.8438 11.5438C16.9086 11.6077 16.9958 11.6438 17.0868 11.6442H17.1008C17.1476 11.6422 17.1935 11.6309 17.2359 11.6109C17.2783 11.591 17.3162 11.5628 17.3476 11.528C17.379 11.4932 17.4031 11.4526 17.4185 11.4084C17.434 11.3642 17.4405 11.3173 17.4377 11.2706C17.3554 9.70782 16.5032 8.82758 14.9903 8.7462H14.9763V8.74533Z"
        fill={iconsConfig.colors[color || 'primaryColor']}
      />
    </svg>
  </div>
);
