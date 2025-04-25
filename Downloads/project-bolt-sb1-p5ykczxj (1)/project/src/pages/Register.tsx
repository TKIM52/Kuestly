import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiNaver, SiKakaotalk, SiGoogle } from 'react-icons/si';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showTermsPopup, setShowTermsPopup] = useState(false);
  const [showSocialTermsPopup, setShowSocialTermsPopup] = useState(false);
  const [showRequiredAlert, setShowRequiredAlert] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [termsChecked, setTermsChecked] = useState({
    terms1: false,
    terms2: false,
    terms3: false,
    terms4: false,
    terms5: false,
  });

  const handleAllCheck = (isAgreeButton: boolean) => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setTermsChecked({
      terms1: newValue,
      terms2: newValue,
      terms3: newValue,
      terms4: newValue,
      terms5: newValue,
    });
    if (!isAgreeButton) {
      setShowTermsPopup(true);
    }
  };

  const handleSocialLogin = () => {
    setShowSocialTermsPopup(true);
  };

  const handleSocialAgree = () => {
    setShowSocialTermsPopup(false);
    navigate('/register/complete');
  };

  const handleSingleCheck = (term: keyof typeof termsChecked) => {
    const newTermsChecked = {
      ...termsChecked,
      [term]: !termsChecked[term],
    };
    setTermsChecked(newTermsChecked);
    setAllChecked(Object.values(newTermsChecked).every(Boolean));
  };

  const handleAgree = () => {
    const requiredTerms = [termsChecked.terms1, termsChecked.terms2, termsChecked.terms3];
    if (requiredTerms.every(Boolean)) {
      setCurrentStep(2);
      setShowTermsPopup(false);
      setShowRequiredAlert(false);
    } else {
      setShowRequiredAlert(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full ${currentStep >= 1 ? 'bg-[#00E676]' : 'bg-gray-200'} text-white flex items-center justify-center font-bold text-sm`}>1</div>
              <div className="ml-2">
                <div className="font-bold text-sm">약관 동의</div>
                <div className="text-xs text-gray-500">필수 약관 동의</div>
              </div>
            </div>
            <div className={`w-12 h-[2px] ${currentStep >= 2 ? 'bg-[#00E676]' : 'bg-gray-200'}`}></div>
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full ${currentStep >= 2 ? 'bg-[#00E676]' : 'bg-gray-200'} flex items-center justify-center font-bold text-sm ${currentStep >= 2 ? 'text-white' : 'text-gray-400'}`}>2</div>
              <div className="ml-2">
                <div className={`font-bold text-sm ${currentStep >= 2 ? 'text-gray-800' : 'text-gray-400'}`}>간편 가입</div>
                <div className="text-xs text-gray-500">간편 가입 선택</div>
              </div>
            </div>
            <div className="w-12 h-[2px] bg-gray-200"></div>
            <div className="flex items-center opacity-50">
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center font-bold text-sm">3</div>
              <div className="ml-2">
                <div className="font-bold text-sm">회원 정보</div>
                <div className="text-xs text-gray-500">회원 가입 완료</div>
              </div>
            </div>
          </div>

          {currentStep === 1 ? (
            <>
              <h2 className="text-center text-lg font-bold mb-6">개인 회원가입에 필요한 약관을 동의 해 주세요</h2>
              <p className="text-center text-gray-500 mb-6 text-sm">만 19세 미만은 가입할 수 없어요</p>

              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg bg-[#00E676] bg-opacity-10 hover:bg-[#00E676] hover:text-white group transition-all duration-200">
                    <div>
                      <span className="text-sm font-bold group-hover:text-white">[필수] Kuestly 이용약관 동의</span>
                      <button className="ml-2 text-xs text-[#00E676] group-hover:text-white">[보기]</button>
                    </div>
                    <div
                      onClick={() => handleSingleCheck('terms1')}
                      className={`w-5 h-5 rounded-full border-2 border-[#00E676] group-hover:border-white flex items-center justify-center cursor-pointer ${
                        termsChecked.terms1 ? 'bg-[#00E676] group-hover:bg-white' : ''
                      }`}
                    >
                      {termsChecked.terms1 && <span className={`text-base ${termsChecked.terms1 ? 'text-white group-hover:text-[#00E676]' : ''}`}>✓</span>}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg bg-[#00E676] bg-opacity-10 hover:bg-[#00E676] hover:text-white group transition-all duration-200">
                    <div>
                      <span className="text-sm font-bold group-hover:text-white">[필수] 개인정보 수집 및 이용 동의</span>
                      <button className="ml-2 text-xs text-[#00E676] group-hover:text-white">[보기]</button>
                    </div>
                    <div
                      onClick={() => handleSingleCheck('terms2')}
                      className={`w-5 h-5 rounded-full border-2 border-[#00E676] group-hover:border-white flex items-center justify-center cursor-pointer ${
                        termsChecked.terms2 ? 'bg-[#00E676] group-hover:bg-white' : ''
                      }`}
                    >
                      {termsChecked.terms2 && <span className={`text-base ${termsChecked.terms2 ? 'text-white group-hover:text-[#00E676]' : ''}`}>✓</span>}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg bg-[#00E676] bg-opacity-10 hover:bg-[#00E676] hover:text-white group transition-all duration-200">
                    <div>
                      <span className="text-sm font-bold group-hover:text-white">[필수] 개인정보 제3자 제공 동의</span>
                      <button className="ml-2 text-xs text-[#00E676] group-hover:text-white">[보기]</button>
                    </div>
                    <div
                      onClick={() => handleSingleCheck('terms3')}
                      className={`w-5 h-5 rounded-full border-2 border-[#00E676] group-hover:border-white flex items-center justify-center cursor-pointer ${
                        termsChecked.terms3 ? 'bg-[#00E676] group-hover:bg-white' : ''
                      }`}
                    >
                      {termsChecked.terms3 && <span className={`text-base ${termsChecked.terms3 ? 'text-white group-hover:text-[#00E676]' : ''}`}>✓</span>}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg bg-[#00E676] bg-opacity-10 hover:bg-[#00E676] hover:text-white group transition-all duration-200">
                    <div>
                      <span className="text-sm font-bold group-hover:text-white">[선택] 프로모션 정보 수신 동의</span>
                      <button className="ml-2 text-xs text-[#00E676] group-hover:text-white">[보기]</button>
                    </div>
                    <div
                      onClick={() => handleSingleCheck('terms4')}
                      className={`w-5 h-5 rounded-full border-2 border-[#00E676] group-hover:border-white flex items-center justify-center cursor-pointer ${
                        termsChecked.terms4 ? 'bg-[#00E676] group-hover:bg-white' : ''
                      }`}
                    >
                      {termsChecked.terms4 && <span className={`text-base ${termsChecked.terms4 ? 'text-white group-hover:text-[#00E676]' : ''}`}>✓</span>}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg bg-[#00E676] bg-opacity-10 hover:bg-[#00E676] hover:text-white group transition-all duration-200">
                    <div>
                      <span className="text-sm font-bold group-hover:text-white">[선택] 혜택 메시지 알림 동의</span>
                      <button className="ml-2 text-xs text-[#00E676] group-hover:text-white">[보기]</button>
                    </div>
                    <div
                      onClick={() => handleSingleCheck('terms5')}
                      className={`w-5 h-5 rounded-full border-2 border-[#00E676] group-hover:border-white flex items-center justify-center cursor-pointer ${
                        termsChecked.terms5 ? 'bg-[#00E676] group-hover:bg-white' : ''
                      }`}
                    >
                      {termsChecked.terms5 && <span className={`text-base ${termsChecked.terms5 ? 'text-white group-hover:text-[#00E676]' : ''}`}>✓</span>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <button 
                  onClick={handleAgree}
                  className="w-full py-3 bg-[#00E676] text-white rounded-full hover:bg-opacity-80 transition-all duration-200 transform hover:-translate-y-1 font-bold"
                >
                  동의하기
                </button>
                <button 
                  onClick={() => handleAllCheck(false)}
                  className="w-full py-3 bg-[#00E676] text-white rounded-full hover:bg-opacity-80 transition-all duration-200 transform hover:-translate-y-1 font-bold"
                >
                  전체 동의
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-center text-lg font-bold mb-16">간편 가입으로 편리하게 가입하세요</h2>
              <div className="space-y-4 max-w-sm mx-auto">
                <button 
                  onClick={handleSocialLogin}
                  className="w-full h-12 flex items-center px-4 bg-[#03C75A] text-white rounded-lg hover:bg-opacity-90 transition-all duration-200 transform hover:-translate-y-1"
                >
                  <SiNaver className="w-6 h-6" />
                  <span className="flex-1 text-center font-bold">네이버 계정으로 간편가입</span>
                </button>
                <button 
                  onClick={handleSocialLogin}
                  className="w-full h-12 flex items-center px-4 bg-[#FEE500] text-black rounded-lg hover:bg-opacity-90 transition-all duration-200 transform hover:-translate-y-1"
                >
                  <SiKakaotalk className="w-6 h-6" />
                  <span className="flex-1 text-center font-bold">카카오 계정으로 간편가입</span>
                </button>
                <button 
                  onClick={handleSocialLogin}
                  className="w-full h-12 flex items-center px-4 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-1"
                >
                  <SiGoogle className="w-6 h-6" />
                  <span className="flex-1 text-center font-bold">구글 계정으로 간편가입</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {showTermsPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold mb-4 text-[#00E676]">전체 동의 확인</h3>
            <div className="space-y-3">
              <div>
                <p className="font-bold text-gray-800 mb-1">• 필수 동의</p>
                <div className="pl-3 space-y-0.5">
                  <p className="text-gray-600 text-[13px]">- 이용약관 동의</p>
                  <p className="text-gray-600 text-[13px]">- 개인정보 수집 및 이용 동의</p>
                  <p className="text-gray-600 text-[13px]">- 개인정보 제3자 제공 동의</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-1">• 선택 동의</p>
                <div className="pl-3 space-y-0.5">
                  <p className="text-gray-600 text-[13px]">- 프로모션 정보 수신 동의</p>
                  <p className="text-gray-600 text-[13px]">- 혜택 메시지(이메일/SMS/푸시 메시지) 알림 동의</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button 
                onClick={handleAgree}
                className="flex-1 py-2 bg-[#00E676] text-white rounded-full hover:bg-opacity-80 transition-all duration-200 font-bold text-sm"
              >
                동의하기
              </button>
              <button 
                onClick={() => setShowTermsPopup(false)}
                className="flex-1 py-2 bg-[#00E676] text-white rounded-full hover:bg-opacity-80 transition-all duration-200 font-bold text-sm"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      {showRequiredAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-bold mb-4 text-center">[필수] 동의 항목을 체크하세요.</h3>
            <button 
              onClick={() => setShowRequiredAlert(false)}
              className="w-full py-2 bg-[#00E676] text-white rounded-full hover:bg-opacity-80 transition-all duration-200 font-bold text-sm"
            >
              확인
            </button>
          </div>
        </div>
      )}

      {showSocialTermsPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold mb-4 text-[#00E676]">전체 동의 확인</h3>
            <div className="space-y-3">
              <div>
                <p className="font-bold text-gray-800 mb-1">• 필수 동의</p>
                <div className="pl-3 space-y-0.5">
                  <p className="text-gray-600 text-[13px]">- 이용약관 동의</p>
                  <p className="text-gray-600 text-[13px]">- 개인정보 수집 및 이용 동의</p>
                  <p className="text-gray-600 text-[13px]">- 개인정보 제3자 제공 동의</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-1">• 선택 동의</p>
                <div className="pl-3 space-y-0.5">
                  <p className="text-gray-600 text-[13px]">- 프로모션 정보 수신 동의</p>
                  <p className="text-gray-600 text-[13px]">- 혜택 메시지(이메일/SMS/푸시 메시지) 알림 동의</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button 
                onClick={() => setShowSocialTermsPopup(false)}
                className="flex-1 py-2 bg-[#00E676] text-white rounded-full hover:bg-opacity-80 transition-all duration-200 font-bold text-sm"
              >
                취소
              </button>
              <button 
                onClick={handleSocialAgree}
                className="flex-1 py-2 bg-[#00E676] text-white rounded-full hover:bg-opacity-80 transition-all duration-200 font-bold text-sm"
              >
                동의하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;