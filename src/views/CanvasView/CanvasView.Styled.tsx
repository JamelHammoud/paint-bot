import styled from 'styled-components'

type StyledProps = {
  mode: 'pencil' | 'eraser'
}

const StyledCanvasView = styled.div<StyledProps>`
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;

  * {
    user-select: none;
  }

  .canvas-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;

    .canvas-logo {
      display: flex;
      align-items: center;

      img {
        height: 36px;
        width: 36px;
        margin: 0 2px 0 -6px;
      }

      h1 {
        font-size: 26px;
      }
    }

    .canvas-header-actions {
      display: flex;
    }
  }

  .canvas-container {
    padding-top: 100%;
    position: relative;
    border: 2px solid ${({ theme }) => theme.color.gray[900]} !important;
    border-radius: 6px;
    overflow: hidden;

    .canvas {
      border-radius: 0 !important;
      border: 0 !important;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      ${({ mode }) => mode === 'pencil' && `
        cursor: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48aW1hZ2UgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUFYTlNSMElBcnM0YzZRQUFCazlKUkVGVWVGN3RtbTlvVlhVWXh6OVdzeitycElMNUpzaGU5RWJ4bFMram1KRVFpMmhzY3l4RW1KSmlrZ25DRW1TMVRUSnJqRlltbWJRMHk0eVoyZDZZTDNKT3k3YVlGYzBoU05UUzJndWxXcTFhMXRZL3ZvZmZBeitQZDI3bjNIdTg1K0o5NE1lNTJ6bjMzTi8zKy94L3pwbkJGUzR6cm5EOHBKRUE3VW5yS25lMFBmNEgvQXZZTVNlNlN4c0Iycy9WYmwwRDNBYmNDZndDREFIL0FIKzdvNUdSRlJGcElzREFDM2dKOEF6d2hJZHVBSGdENkFBbUhCRlprNUFXQWd6OFRPQmFZQmZ3a01EUG16ZVBvYUVoenA4L2IxdzBBeThDZnpraXNpSWhEUVQ0NEs5MzRCOFUyczdPVG1wcmF4a2JHNk90clkzbVptRVA1RW5nTmVCUFI0SmNJNWJrbXdBZi9BM0F5MENka096WXNZTmx5NVpkQUtxbHBjVW40VEhnSFk4RVdVSmt5U2NCWWZDYmdKVkNzSDM3ZGxhdURENWVKRVpDU1VuSm1ZbUppUXJnZTBlQ2dxTXlSQ1RKRndINlhRVTcrYnpNZmo5d3oxVGdEZG1pUllzNGRPaVEvbndPYUFQK2NERWhzaFhrZzRBdytDN2diZ08zWU1FQ2VudDdtVGxUM0dTV0kwZU9zSERoUXAzc0J5cUIzendyU0xVRmhNRy9COXlySGUvZHU1YzllL2JRMWRXRlNPanU3bWJXckZrWndWUlhWN04vdjR5R1orVXh3S2l6QXFYSFNISTVMU0FNdmhPNHo4QXZYcnlZOGZGeEtpc3JPWGp3WUVEQ2dRTUhtRDE3OWdXQXZFQTRETlFEMzdoQ1NXNHdIZ205S3pXamZpZk85V0h3aXQ3MysrRHRwcU9qbzFSVlZYSDQ4T0dBaEgzNzlqRm56cHpnZENnTHlQL2ZCWDVNdXdXRXdiOEZQSkFKdkpGdzd0dzVhbXBxT0hic1dFREM3dDI3ZzVyQXF3UGVCSFlDUHdBamFZNEJsdXBVM1NuYXE1UU5paHo1dk14K01qbDkrblJRQkIwL2ZwejU4K2N6T0Rob2x5cHV2TzQwLzVPbmZWV0dxY29DNFR5dkd2N2g2WUEzcEtkT25RcEk4TUMvcnhySmFmMW41L3UvcDdFT0NJTi9GYWlPQWw3WE5qVTFzWEhqUnVORDBmNEREN3dpdjhDclNWRDBqNng5M1RpSkxCQ3U3YmNCZ2ExUFpmYStPelEyTnJKcGs0ckRRTlFaS3VlckxaYm1EYng2QVVYKzFQUUNZZkNxN1IrSkNuN0RoZzFzM3J6WndMY0Fuem53SXNBSEw4MExmT1FTMkc2ZVN3c0lnOTlxalUwVXphOWZ2NTdXMWxiYlh4UHdlUWo4V0tnTGpBMCtseTRRQnY4S1VCdFY4dzBORFVIYjY2UVIrTktadkRUL3EvTjVhNEd6bWdQazBnTENBVTgrWHhNVi9McDE2Mmh2YjdkOVBRVjg0Zm04d1B1YXp3bjRYRmhBR0x3aWRWVlU4R3ZYcm1YTGxpMisyY3ZuTGMzSjV3WGVKa0N4QTE2bW1pT2JHSkIxbnRlRzFxeFp3OWF0Q2hlQmFPUWo4S3J1TE9DWjVtMFltZ2xIN1AvRkpTRHM4eXBMZ3hsZWxJQzNldlZxdG0yVHh3U2loSzlVZDluQVorTUNtdG5iTUVPMS9iVEtXMTlOcTFhdENpWS9UcFRuUDNWbWIzaytVYzFuRXdTdHVia091QkhvQSs2SW92a1ZLMWJRMGFIS09CRDE5TDBlZUQvYUoyTDJ2aUxpdUlCcHZ4UzQzYVVxenA0OWUxSHZuc2t4bHk5ZnpzNmQ4cGhBVk8xOGtpL3djVjFBVDI2ay9adWM2WGZNblR1WGt5ZFBUaG1JNnV2cjJiVkxJLzlBbmdjK3poRHRzeDUxVDdrUjc0STRGcUNuTmhwaGExN1ZBRHl1amszOStxVms2ZEtsUVYvdlJLWGVSL2tHSDljQzFOdkwvRzl4ajZuS1ZicXFpcHRNbGl4WkVzejduS2pVT3pwSnRMZmFQb29TczdvMnFnWG9lZ3QrdHpvdGx2WDA5RkJlWHA1eEkzVjFkYjUxdkFEMFRCTHRMenY0T0JhZ0FLakp6czNBWGRLa3h0Y2pJeU9VbHBZeVBEeE1YMThmL2YzOW5EaHhnb0dCQVRUZWNxTG5lZDFwQWgrSEFEM01FQUh5ZjVXOEwxVlVWRkJXVm9abTlScGpUU0lDLzZIWDFZVWJtNXlXdDFGOElxb0xXQUNVQlR3TlBKcmh4NzREdm5YajZxK0FyMTBYcDVwZVN3OHhiSXlWRjdQMzl4eVhBS1hBdDkzTEN3SXIwR2ZjU3d6V3RBaWNVcHJtOWFycURIaTRuNCtpc0p4Zkc0Y0F1WUFxUUxtQmxqNnJMRlo4MEhCQ3dEV20waElabXRscGlRZ1Jra2hYRjVlWnFBUW9CaWdOcWc1UUt0VFMzL3EvUkw0c0F2eGxST2hvYjNia3plZkRSRVVsUUZXZ2tTRGdCdDYwTDJEMkhvL1Y4VHJhWjUyTE5iMk5xK0dwdmhlVkFHdURSWUl0Z1pmWTIxc0NhRUQxMlpiT1p6Vy9td3BNblBOUkNkQnYyT3Ryc2daOVg4dkErYSt5cFJKd3RpNXdxUXlTT3UxT3h5TGlXTUIwN2xzdzF4UUpLQmhWSmJUUm9nVWtSR3pCM0xab0FRV2pxb1EyV3JTQWhJZ3RtTnNXTGFCZ1ZKWFFSb3NXa0JDeEJYUGJvZ1VVaktvUzJtalJBaElpdG1CdVc3U0FnbEZWUWhzdFdrQkN4QmJNYmY4SDhFaENYeXBaTmEwQUFBQUFTVVZPUks1Q1lJST0iIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIvPjwvc3ZnPg==) 7 18, auto !important;
      `}

      ${({ mode }) => mode === 'eraser' && `
        cursor: grab;

        &:active {
          cursor: grabbing;
        }
      `}
    }
  }

  .canvas-actions {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    .canvas-actions-group {
      display: flex;
    }
  }

  .canvas-tools {
    .clear-btn {
      justify-content: unset;
      padding: 0 5px;

      svg {
        flex-shrink: 0;
        transition: 0.2s;
      }

      &::after {
        content: 'Clear';
        width: 100%;
        overflow: hidden;
        display: block;
        max-width: 0;
        transition: 0.2s;
        padding-left: 4px;
        opacity: 0;
        pointer-events: none;
      }

      &:hover {
        width: auto;
        padding: 0 8px 0 5px;

        &::after {
          max-width: 45px;
          opacity: 1;
        }
      }
    }
  }

  .send-button {
    height: 42px;
  }
`

export default StyledCanvasView
