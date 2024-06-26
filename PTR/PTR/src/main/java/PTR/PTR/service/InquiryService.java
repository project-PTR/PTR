package PTR.PTR.service;

import PTR.PTR.model.Inquiry;
import PTR.PTR.model.User;
import PTR.PTR.repository.InquiryRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class InquiryService {
    InquiryRepository inquiryRepository;
    InquiryReplyService inquiryReplyService;

    public InquiryService(InquiryRepository inquiryRepository, InquiryReplyService inquiryReplyService) {
        this.inquiryRepository = inquiryRepository;
        this.inquiryReplyService = inquiryReplyService;
    }

    public Inquiry askInquiry(Inquiry inquiry){
        inquiry.setCreatedAt(LocalDateTime.now());
        return inquiryRepository.save(inquiry);
    }

    public List<Inquiry> findInquiry(){
        return inquiryRepository.findAll();
    }

    public List<Inquiry> myInquiry(User user){
        return inquiryRepository.findByUser(user);
    }

    public List<Inquiry> findNotReply(){
        return inquiryRepository.findAll().stream().filter(l-> inquiryReplyService.findInquiryReply(l).isEmpty()).collect(Collectors.toList());
    }
}
