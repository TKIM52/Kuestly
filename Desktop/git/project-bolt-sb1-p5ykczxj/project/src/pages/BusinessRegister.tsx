import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BusinessRegister: React.FC = () => {
  const navigate = useNavigate();
  const [showTermsPopup, setShowTermsPopup] = useState(false);
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
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [tokenContractAddress, setTokenContractAddress] = useState('');
  const [ownerAddress, setOwnerAddress] = useState('');
  const [operatorAddress, setOperatorAddress] = useState('');

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

  const handleSendVerification = () => {
    setIsEmailSent(true);
  };

  const handleVerifyCode = () => {
    setIsVerified(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-[#3e5eff]' : 'bg-gray-200'} text-white flex items-center justify-center font-bold`}>1</div>
              <div className="mt-2 text-center">
                <div className={`text-sm font-bold ${currentStep >= 1 ? 'text-[#3e5eff]' : 'text-gray-400'}`}>약관 동의</div>
                <div className="text-xs text-gray-500">필수 약관 동의</div>
              </div>
            </div>
            <div className={`flex-1 h-[2px] mx-2 ${currentStep >= 2 ? 'bg-[#3e5eff]' : 'bg-gray-200'}`} />
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-[#3e5eff]' : 'bg-gray-200'} text-white flex items-center justify-center font-bold`}>2</div>
              <div className="mt-2 text-center">
                <div className={`text-sm font-bold ${currentStep >= 2 ? 'text-[#3e5eff]' : 'text-gray-400'}`}>공식 이메일 인증</div>
                <div className="text-xs text-gray-500">이메일 인증</div>
              </div>
            </div>
            <div className={`flex-1 h-[2px] mx-2 ${currentStep >= 3 ? 'bg-[#3e5eff]' : 'bg-gray-200'}`} />
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full ${currentStep >= 3 ? 'bg-[#3e5eff]' : 'bg-gray-200'} text-white flex items-center justify-center font-bold`}>3</div>
              <div className="mt-2 text-center">
                <div className={`text-sm font-bold ${currentStep >= 3 ? 'text-[#3e5eff]' : 'text-gray-400'}`}>지갑 인증</div>
                <div className="text-xs text-gray-500">지갑 연동</div>
              </div>
            </div>
            <div className={`flex-1 h-[2px] mx-2 ${currentStep >= 4 ? 'bg-[#3e5eff]' : 'bg-gray-200'}`} />
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full ${currentStep >= 4 ? 'bg-[#3e5eff]' : 'bg-gray-200'} text-white flex items-center justify-center font-bold`}>4</div>
              <div className="mt-2 text-center">
                <div className={`text-sm font-bold ${currentStep >= 4 ? 'text-[#3e5eff]' : 'text-gray-400'}`}>재단 및 담당자</div>
                <div className="text-xs text-gray-500">정보 입력</div>
              </div>
            </div>
            <div className={`flex-1 h-[2px] mx-2 ${currentStep >= 5 ? 'bg-[#3e5eff]' : 'bg-gray-200'}`} />
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full ${currentStep >= 5 ? 'bg-[#3e5eff]' : 'bg-gray-200'} text-white flex items-center justify-center font-bold`}>5</div>
              <div className="mt-2 text-center">
                <div className={`text-sm font-bold ${currentStep >= 5 ? 'text-[#3e5eff]' : 'text-gray-400'}`}>프로젝트</div>
                <div className="text-xs text-gray-500">정보 입력</div>
              </div>
            </div>
          </div>

          {currentStep === 1 ? (
            <>
              <h2 className="text-center text-lg font-bold mb-6">재단 회원가입에 필요한 약관을 동의 해 주세요</h2>
              <p className="text-center text-gray-500 mb-6 text-sm">가상자산 재단만 가입이 가능합니다</p>

              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg bg-[#EBEFFF] hover:bg-[#3e5eff] hover:text-white group transition-all duration-200">
                    <div>
                      <span className="text-sm font-bold group-hover:text-white">[필수] Kuestly 이용약관 동의</span>
                      <button className="ml-2 text-xs text-[#3e5eff] group-hover:text-white">[보기]</button>
                    </div>
                    <div
                      onClick={() => handleSingleCheck('terms1')}
                      className={`w-5 h-5 rounded-full border-2 border-[#3e5eff] group-hover:border-white flex items-center justify-center cursor-pointer ${
                        termsChecked.terms1 ? 'bg-[#3e5eff] group-hover:bg-white' : ''
                      }`}
                    >
                      {termsChecked.terms1 && <span className={`text-base ${termsChecked.terms1 ? 'text-white group-hover:text-[#3e5eff]' : ''}`}>✓</span>}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg bg-[#EBEFFF] hover:bg-[#3e5eff] hover:text-white group transition-all duration-200">
                    <div>
                      <span className="text-sm font-bold group-hover:text-white">[필수] 개인정보 수집 및 이용 동의</span>
                      <button className="ml-2 text-xs text-[#3e5eff] group-hover:text-white">[보기]</button>
                    </div>
                    <div
                      onClick={() => handleSingleCheck('terms2')}
                      className={`w-5 h-5 rounded-full border-2 border-[#3e5eff] group-hover:border-white flex items-center justify-center cursor-pointer ${
                        termsChecked.terms2 ? 'bg-[#3e5eff] group-hover:bg-white' : ''
                      }`}
                    >
                      {termsChecked.terms2 && <span className={`text-base ${termsChecked.terms2 ? 'text-white group-hover:text-[#3e5eff]' : ''}`}>✓</span>}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg bg-[#EBEFFF] hover:bg-[#3e5eff] hover:text-white group transition-all duration-200">
                    <div>
                      <span className="text-sm font-bold group-hover:text-white">[필수] 개인정보 제3자 제공 동의</span>
                      <button className="ml-2 text-xs text-[#3e5eff] group-hover:text-white">[보기]</button>
                    </div>
                    <div
                      onClick={() => handleSingleCheck('terms3')}
                      className={`w-5 h-5 rounded-full border-2 border-[#3e5eff] group-hover:border-white flex items-center justify-center cursor-pointer ${
                        termsChecked.terms3 ? 'bg-[#3e5eff] group-hover:bg-white' : ''
                      }`}
                    >
                      {termsChecked.terms3 && <span className={`text-base ${termsChecked.terms3 ? 'text-white group-hover:text-[#3e5eff]' : ''}`}>✓</span>}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg bg-[#EBEFFF] hover:bg-[#3e5eff] hover:text-white group transition-all duration-200">
                    <div>
                      <span className="text-sm font-bold group-hover:text-white">[선택] 프로모션 정보 수신 동의</span>
                      <button className="ml-2 text-xs text-[#3e5eff] group-hover:text-white">[보기]</button>
                    </div>
                    <div
                      onClick={() => handleSingleCheck('terms4')}
                      className={`w-5 h-5 rounded-full border-2 border-[#3e5eff] group-hover:border-white flex items-center justify-center cursor-pointer ${
                        termsChecked.terms4 ? 'bg-[#3e5eff] group-hover:bg-white' : ''
                      }`}
                    >
                      {termsChecked.terms4 && <span className={`text-base ${termsChecked.terms4 ? 'text-white group-hover:text-[#3e5eff]' : ''}`}>✓</span>}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg bg-[#EBEFFF] hover:bg-[#3e5eff] hover:text-white group transition-all duration-200">
                    <div>
                      <span className="text-sm font-bold group-hover:text-white">[선택] 혜택 메시지 알림 동의</span>
                      <button className="ml-2 text-xs text-[#3e5eff] group-hover:text-white">[보기]</button>
                    </div>
                    <div
                      onClick={() => handleSingleCheck('terms5')}
                      className={`w-5 h-5 rounded-full border-2 border-[#3e5eff] group-hover:border-white flex items-center justify-center cursor-pointer ${
                        termsChecked.terms5 ? 'bg-[#3e5eff] group-hover:bg-white' : ''
                      }`}
                    >
                      {termsChecked.terms5 && <span className={`text-base ${termsChecked.terms5 ? 'text-white group-hover:text-[#3e5eff]' : ''}`}>✓</span>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <button 
                  onClick={handleAgree}
                  className="w-full py-3 bg-[#EBEFFF] text-[#3e5eff] rounded-full hover:bg-[#3e5eff] hover:text-white transition-all duration-200 transform hover:-translate-y-1 font-bold"
                >
                  동의하기
                </button>
                <button 
                  onClick={() => handleAllCheck(false)}
                  className="w-full py-3 bg-[#EBEFFF] text-[#3e5eff] rounded-full hover:bg-[#3e5eff] hover:text-white transition-all duration-200 transform hover:-translate-y-1 font-bold"
                >
                  전체 동의
                </button>
              </div>
            </>
          ) : currentStep === 2 ? (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-center text-2xl font-bold mb-2">재단의 공식 이메일 인증이 필요합니다</h2>
              <div className="text-center mb-12">
                <p className="text-gray-600">재단의 공식 이메일 주소를 입력해 주세요</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <label className="w-[180px] text-sm font-bold">재단 공식 이메일 주소</label>
                  <div className="flex-1">
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="이메일 주소 입력"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[400px] px-4 py-2 text-sm rounded-full border focus:outline-none focus:border-[#3e5eff]"
                      />
                      <button
                        onClick={handleSendVerification}
                        className="w-[120px] py-2 bg-[#EBEFFF] text-[#3e5eff] rounded-full hover:bg-[#3e5eff] hover:text-white transition-colors font-bold text-sm"
                      >
                        인증번호 보내기
                      </button>
                    </div>
                    {isEmailSent && (
                      <p className="mt-1 text-xs text-[#3e5eff]">✓ 인증 메일을 발송하였습니다</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center">
                  <label className="w-[180px] text-sm font-bold">인증번호 입력</label>
                  <div className="flex-1">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="인증번호 6자리 입력"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        className="w-[400px] px-4 py-2 text-sm rounded-full border focus:outline-none focus:border-[#3e5eff]"
                      />
                      <button
                        onClick={handleVerifyCode}
                        className="w-[120px] py-2 bg-[#EBEFFF] text-[#3e5eff] rounded-full hover:bg-[#3e5eff] hover:text-white transition-colors font-bold text-sm"
                      >
                        인증번호 확인
                      </button>
                    </div>
                    {isVerified && (
                      <p className="mt-1 text-xs text-[#3e5eff]">✓ 인증이 완료되었습니다</p>
                    )}
                  </div>
                </div>

                <div className="mt-12 flex justify-end">
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="w-[120px] py-2 bg-[#EBEFFF] text-[#3e5eff] rounded-full hover:bg-[#3e5eff] hover:text-white transition-all duration-200 transform hover:-translate-y-1 font-bold text-sm"
                  >
                    다음
                  </button>
                </div>

                <div className="mt-[5cm] text-center">
                  <p className="text-sm text-gray-500">
                    ※ 등록하신 정보가 사실과 다를 경우, 추후 가입 승인이 취소<br />
                    되거나 이용에 제한이 발생할 수 있습니다
                  </p>
                </div>
              </div>
            </div>
          ) : currentStep === 3 ? (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-center text-2xl font-bold mb-2">재단이 발행한 가상자산의 검증이 필요합니다</h2>

              <div className="space-y-8 mt-16">
                <div className="grid grid-cols-[180px,1fr] items-center">
                  <label className="text-sm font-bold">토큰 컨트랙트 주소</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="0xabcd1234567890ffdd"
                      value={tokenContractAddress}
                      onChange={(e) => setTokenContractAddress(e.target.value)}
                      className="w-[400px] px-4 py-2 text-sm rounded-full border focus:outline-none focus:border-[#3e5eff]"
                    />
                    <button
                      className="w-[120px] py-2 bg-[#EBEFFF] text-[#3e5eff] rounded-full hover:bg-[#3e5eff] hover:text-white transition-colors font-bold text-sm"
                    >
                      확인
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-[180px,1fr] items-start">
                  <label className="text-sm font-bold">Owner 지갑 주소</label>
                  <div>
                    <input
                      type="text"
                      placeholder="0xabcd1234567890ffdd"
                      value={ownerAddress}
                      onChange={(e) => setOwnerAddress(e.target.value)}
                      className="w-[400px] px-4 py-2 text-sm rounded-full border focus:outline-none focus:border-[#3e5eff]"
                    />
                    <p className="mt-1 text-xs text-[#3e5eff]">※ 토큰 컨트랙트 주소 입력 후 "확인"버튼을 클릭하시면 자동으로 조회되어 입력 됩니다</p>
                  </div>
                </div>

                <div className="grid grid-cols-[180px,1fr] items-center">
                  <label className="text-sm font-bold">운영 지갑 주소<span className="text-gray-400">(선택)</span></label>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="0xabcd1234567890ffdd"
                        value={operatorAddress}
                        onChange={(e) => setOperatorAddress(e.target.value)}
                        className="w-[400px] px-4 py-2 text-sm rounded-full border focus:outline-none focus:border-[#3e5eff]"
                      />
                      <button
                        className="w-[180px] py-2 bg-[#EBEFFF] text-[#3e5eff] rounded-full hover:bg-[#3e5eff] hover:text-white transition-colors font-bold text-sm"
                      >
                        transfer Ownership 검증
                      </button>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="w-[400px] py-2 bg-[#EBEFFF] text-[#3e5eff] rounded-full hover:bg-[#3e5eff] hover:text-white transition-colors font-bold text-sm"
                      >
                        운영 지갑으로 서명
                      </button>
                      <button
                        className="w-[180px] py-2 bg-[#EBEFFF] text-[#3e5eff] rounded-full hover:bg-[#3e5eff] hover:text-white transition-colors font-bold text-sm"
                      >
                        Owner 지갑으로 서명
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-16">
                  <button
                    onClick={() => setCurrentStep(4)}
                    className="w-[180px] py-2 bg-[#EBEFFF] text-[#3e5eff] rounded-full hover:bg-[#3e5eff] hover:text-white transition-all duration-200 transform hover:-translate-y-1 font-bold text-sm"
                  >
                    다음
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {showTermsPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold mb-4 text-[#3e5eff]">전체 동의 확인</h3>
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
                className="flex-1 py-2 bg-[#EBEFFF] text-[#3e5eff] rounded-full hover:bg-[#3e5eff] hover:text-white transition-all duration-200 font-bold text-sm"
              >
                동의하기
              </button>
              <button 
                onClick={() => setShowTermsPopup(false)}
                className="flex-1 py-2 bg-[#EBEFFF] text-[#3e5eff] rounded-full hover:bg-[#3e5eff] hover:text-white transition-all duration-200 font-bold text-sm"
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
              className="w-full py-2 bg-[#3e5eff] text-white rounded-full hover:bg-[#3251cc] transition-all duration-200 font-bold text-sm"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessRegister;