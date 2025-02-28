import * as S from './FarmIntroduce.styles';
import useMediaQueries from '@/hooks/useMediaQueries';

export const professors = [
    {
      name: "한기용 교수님",
      photo: "https://placehold.co/200x200", // 이미지 URL (없다면 비워둔다거나 placeholder 사용)
      position: "교수",
      phone: "02-2290-1406",
      email: "HKY87@dongguk.edu",
      major: "IoT, 시스템 통합",
      office: "신공학관 6109호",
    },
    {
      name: "김성지 교수님",
      photo: "https://placehold.co/200x200",
      position: "교수",
      phone: "02-2290-1408",
      email: "sjkim01@dongguk.edu",
      major: "전자계산학",
      office: "신공학관 6109호",
    },
    // 필요하다면 추가
  ];

  
  export default function FarmIntroduce() {
    const { isMobile,isTablet } = useMediaQueries();
    return (
      <S.Container $isMobile = {isMobile}>
        {/* 메인 설명 부분 */}
        <S.MainContents $isMobile = {isMobile}>
          {/* 첫 번째 박스 (왼쪽 그레이 박스 + 오른쪽 텍스트) */}
          <S.ContentBox $isMobile = {isMobile}>
            <S.GrayBox $isMobile = {isMobile} $isTablet = {isTablet} />
            <S.TextWrapper $isMobile = {isMobile} $isTablet = {isTablet}>
              Farm System은 <br />
              동국대학교에서 SW/AI 역량을 기르고<br />
              실력을 갈고닦을 수 있는 최적의 환경을 제공합니다.
            </S.TextWrapper>
          </S.ContentBox>
  
          {/* 두 번째 박스 (오른쪽 텍스트 + 왼쪽 그레이 박스) */}
          <S.ContentBox style={{ justifyContent: 'flex-end' }} $isMobile = {isMobile}>
            <S.TextWrapper textAlign="right" $isMobile = {isMobile} $isTablet = {isTablet}>
              <strong style={{ fontWeight: 700 }}>최신 기술을 깊이 있게 탐구하는 5가지 신기술 트랙</strong>과,
              <br />
              <strong style={{ fontWeight: 700 }}>SW/AI의 탄탄한 기초를 다지는 Union</strong>으로 구성됩니다.
            </S.TextWrapper>
            <S.GrayBox $isMobile = {isMobile} $isTablet = {isTablet}/>
          </S.ContentBox>
  
          {/* 세 번째 박스 */}
          <S.ContentBox $isMobile = {isMobile}>
            <S.GrayBox $isMobile = {isMobile} $isTablet = {isTablet}/>
            <S.TextWrapper $isMobile = {isMobile} $isTablet = {isTablet}>
              <strong style={{ fontWeight: 700 }}>신기술 트랙</strong>에서는
              <br />
              각 분야의 최첨단 기술을 학습하고, <br />
              이를 프로젝트에 적용하며 실전 경험을 쌓습니다.
            </S.TextWrapper>
          </S.ContentBox>
  
          {/* 네 번째 박스 */ }
          <S.ContentBox style={{ justifyContent: 'flex-end' }} $isMobile = {isMobile}>
            <S.TextWrapper textAlign="right" $isMobile = {isMobile} $isTablet = {isTablet}>
              <strong style={{ fontWeight: 600 }}>Union</strong>에서는
              <br />
              SW/AI의 핵심 개념을 익히고,<br />
              탄탄한 기초를 바탕으로 성장할 수 있도록 돕습니다.
            </S.TextWrapper>
            <S.GrayBox $isMobile = {isMobile} $isTablet = {isTablet}/>
          </S.ContentBox>
        </S.MainContents>
  
        {/* 교수진 정보 섹션 */}
        <S.ProfessorSection $isMobile = {isMobile} $isTablet = {isTablet}>
      <S.SectionTitle $isMobile = {isMobile}>Farm System 담당 교수진</S.SectionTitle>
      <S.ProfessorList $isMobile = {isMobile}>
        {professors.map((prof, idx) => (
          <S.ProfessorItem key={idx} $isMobile = {isMobile} $isTablet = {isTablet} >
                {!isMobile && (
                  <S.ProfessorPhoto
                    src={prof.photo}
                    alt={prof.name}
                    $isMobile={isMobile}
                  />
                )}

            <S.ProfessorDetailsContainer $isMobile = {isMobile}>
              <S.ProfessorName $isMobile = {isMobile}>{prof.name}</S.ProfessorName>
              <div style={{ display: 'flex', gap: 20, maxWidth: '80%'}}>
                <S.DetailLabels $isMobile = {isMobile}>
                  <S.DetailLabel $isMobile = {isMobile}> <S.DetailDot $isMobile = {isMobile}>·</S.DetailDot> 직책</S.DetailLabel>
                  <S.DetailLabel $isMobile = {isMobile}> <S.DetailDot $isMobile = {isMobile}>·</S.DetailDot> 연락처</S.DetailLabel>
                  <S.DetailLabel $isMobile = {isMobile}> <S.DetailDot $isMobile = {isMobile}>·</S.DetailDot> 이메일</S.DetailLabel>
                  <S.DetailLabel $isMobile = {isMobile}> <S.DetailDot $isMobile = {isMobile}>·</S.DetailDot> 전공분야</S.DetailLabel>
                  <S.DetailLabel $isMobile = {isMobile}> <S.DetailDot $isMobile = {isMobile}>·</S.DetailDot> 연구실</S.DetailLabel>
                </S.DetailLabels>
                <S.DetailValues $isMobile = {isMobile}>
                  <S.DetailValue $isMobile = {isMobile} >{prof.position}</S.DetailValue>
                  <S.DetailValue $isMobile = {isMobile}>{prof.phone}</S.DetailValue>
                  <S.DetailValue $isMobile = {isMobile}>{prof.email}</S.DetailValue>
                  <S.DetailValue $isMobile = {isMobile}>{prof.major}</S.DetailValue>
                  <S.DetailValue $isMobile = {isMobile}>{prof.office}</S.DetailValue>
                </S.DetailValues>
              </div>
              </S.ProfessorDetailsContainer>
              {isMobile && (
                  <S.ProfessorPhoto
                    src={prof.photo}
                    alt={prof.name}
                    $isMobile={isMobile}
                  />
                )}
            </S.ProfessorItem>
            ))}
        </S.ProfessorList>
       </S.ProfessorSection>
      </S.Container>
    );
  }