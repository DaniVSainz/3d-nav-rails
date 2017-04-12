require 'rails_helper'

describe 'navigate' do
    describe 'homepage' do
      it 'can be reached successfully' do
        visit root_path
        expect(page.status_code).to eq(200)
      end
    end

    describe 'Click projects button' do
      it 'takes your to projects page' do
        visit root_path
        click_link('Projects')
        expect(page).to have_content "Projects"
      end
    end

end
