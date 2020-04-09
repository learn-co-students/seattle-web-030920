require "application_system_test_case"

class TeasTest < ApplicationSystemTestCase
  setup do
    @tea = teas(:one)
  end

  test "visiting the index" do
    visit teas_url
    assert_selector "h1", text: "Teas"
  end

  test "creating a Tea" do
    visit teas_url
    click_on "New Tea"

    fill_in "Name", with: @tea.name
    fill_in "Strength", with: @tea.strength
    fill_in "Tea type", with: @tea.tea_type
    click_on "Create Tea"

    assert_text "Tea was successfully created"
    click_on "Back"
  end

  test "updating a Tea" do
    visit teas_url
    click_on "Edit", match: :first

    fill_in "Name", with: @tea.name
    fill_in "Strength", with: @tea.strength
    fill_in "Tea type", with: @tea.tea_type
    click_on "Update Tea"

    assert_text "Tea was successfully updated"
    click_on "Back"
  end

  test "destroying a Tea" do
    visit teas_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Tea was successfully destroyed"
  end
end
