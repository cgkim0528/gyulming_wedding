/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "황철민",
    nameEn: "Groom",
    father: "황병웅",
    mother: "권엄숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김규리",
    nameEn: "Bride",
    father: "김형근",
    mother: "이미영",
    fatherDeceased: true,
    motherDeceased: false
  },

  wedding: {
    date: "2027-08-28",
    time: "14:30",
    venue: "팔레드 오페라",
    hall: "3층 트리아농홀",
    address: "대전 서구 둔산남로 50",
    tel: "042-300-5000",
    mapLinks: {
      kakao: "https://place.map.kakao.com/1518140833",
      naver: "https://map.naver.com/p/search/%ED%8C%94%EB%A0%88%EB%93%9C%EC%98%A4%ED%8E%98%EB%9D%BC/place/1599246173?placePath=/home?bk_query=%ED%8C%94%EB%A0%88%EB%93%9C%EC%98%A4%ED%8E%98%EB%9D%BC&entry=pll&from=map&fromNxList=true&fromPanelNum=2&timestamp=202605261234&locale=ko&svcName=map_pcv5&searchText=%ED%8C%94%EB%A0%88%EB%93%9C%EC%98%A4%ED%8E%98%EB%9D%BC&searchType=place&c=15.00,0,0,0,dh"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "홍길동", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "홍판서", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "김부인", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "김영희", bank: "하나은행", number: "000-000-000000" },
      { role: "아버지", name: "김사장", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "이부인", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "활철민 ♥ 김규리 결혼합니다",
    description: "2027년 8월 28일, 소중한 분들을 초대합니다."
  }
};
