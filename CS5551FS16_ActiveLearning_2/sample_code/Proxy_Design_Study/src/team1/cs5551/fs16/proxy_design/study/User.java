package team1.cs5551.fs16.proxy_design.study;

public class User {
	private String userName;
	
	// The password and email are not allowed to be viewed by others by the proxy.
	private String password;
	private String emailAddress;
	
	public User(String id, String pwd, String email) {
		userName = id;
		password = pwd;
		emailAddress = email;
	}
	
	public String getUserName() { return userName; }
	public String getPassword() { return password; }
	public void changePassword(String newPwd) { password = newPwd; }
	public String getEmail() { return emailAddress; }
	public void changeEmail(String newEmail) { emailAddress = newEmail; }
}