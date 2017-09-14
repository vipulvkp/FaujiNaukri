require 'test_helper'

class WelcomeControllerTest < ActionController::TestCase
  test "should get show_profile" do
    get :show_profile
    assert_response :success
  end

end
