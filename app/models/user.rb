class User < ApplicationRecord
    # skip_before_action :verify_authenticity_token
    before_validation :ensure_session_token
    validates :email, :password_digest, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    attr_reader :password

    after_initialize :create_list


    has_many :lists,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :MyList
        
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def check_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user
            user.check_password?(password) ? user : nil
        else
            nil
        end
    end

    def create_list
        id = self.id
    end

end
